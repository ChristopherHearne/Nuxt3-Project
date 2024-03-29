﻿using System.Web;
using API_Test.Models;
using API_Test.DBContext;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Security.Cryptography;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API_Test.Controllers
{
    [Route("api/tokens")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        private IConfiguration Configuration { get; }
        private readonly PortfolioGenDBContext _context;

        public TokenController(PortfolioGenDBContext context, IConfiguration config)
        {
            _context = context;
            Configuration = config; 
        }

        // GET: api/tokens/generate
        // Uses generated Github OAUTH code to get access token
        [HttpGet("generate")]
        [Consumes("application/json")]
        [Produces("application/json")]
        public async Task<ActionResult> GitHubSignInData([FromQuery] String code, [FromQuery] int id)
        {
            Token token = new Token();
            string clientID = Configuration["Github:ClientId"];
            string clientSecret = Configuration["Github:ClientSecret"];
            // var activeProfile = await _context.Profiles.FindAsync(state); 
            using (HttpClient client = new HttpClient())
            {

                var parameters = new Dictionary<string, string> { { "client_id", clientID }, { "client_secret", clientSecret }, { "code", code } };
                var encodedContent = new FormUrlEncodedContent(parameters);
                try
                {
                    // TODO: Make sure HttpResponseMessage has an Accept Header of application/json. Unnecessary parsing of string contents below
                    HttpResponseMessage response = await client.PostAsync("https://github.com/login/oauth/access_token", encodedContent);
                    response.EnsureSuccessStatusCode();
                    string responseBody = await response.Content.ReadAsStringAsync();
                    var decodedURL = HttpUtility.UrlDecode(responseBody);
                    var dict = HttpUtility.ParseQueryString(decodedURL);


                    var resultObj = dict.AllKeys.ToDictionary(key => key, key => dict[key]);
                    token.AccessToken = resultObj["access_token"];
                    token.TokenType = resultObj["token_type"];
                    token.Scope = resultObj["scope"];
                    token.ProfileId = id;
                    var postReq = await PostToken(token); // This can create a SQL-Exception if the foreign key constraint is broken
                    var authGroup = "lao85jasim";
                    string url = "http://localhost:3000/oauth-" + authGroup + "/" + id; 
                    return Redirect(url);
                }
                catch (HttpRequestException e)
                {
                    return NotFound(e);
                };
            }

        }

        // GET: api/tokens
        [HttpGet]
        [Produces("application/json")]
        public async Task<ActionResult<IEnumerable<Token>>> GetTokens()
        {
            var list = await _context.Tokens.ToListAsync<Token>();
            return Ok(list);
        }

        // GET: api/tokens/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Token>> GetToken(int id)
        {
            var token = await _context.Tokens.FindAsync(id);
            if (token == null)
            {
                return NotFound("Token could not be found");
            }
            return token;
        }

        // GET: api/tokens/profile/{profileID}
        [HttpGet("profile/{profileID}")]
        public async Task<ActionResult<Token>> GetTokenByProfileId([FromQuery]int profileID)
        {
            var token = await _context.Tokens.FirstOrDefaultAsync(e => e.ProfileId == profileID);
            if (token == null)
            {
                return NotFound("Could not find token attached to that profileID");
            }
            return token;
        }

        // POST: api/tokens
        [HttpPost]
        [Consumes("application/json")]
        [Produces("application/json")]
        public async Task<ActionResult<Token>> PostToken([FromQuery] Token token)
        {
            _context.Tokens.Add(token);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetToken", new { id = token.Id }, token);
        }

        // DELETE: api/tokens/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult<Token>> DeleteToken(int id)
        {
            var token = await _context.Tokens.FindAsync(id);
            if (token == null)
            {
                return NotFound();
            }

            _context.Tokens.Remove(token);
            await _context.SaveChangesAsync();

            return token;
        }

        // Generates a random base64 that is used to create a unique oauth grouping. For security purposes, this should be changed to a more secure random string generator
        private static string GetRandomString(int count)
        {
            return Convert.ToBase64String(RandomNumberGenerator.GetBytes(count)); 
        }

    }
}

