using System.Web;
using API_Test.Models;
using API_Test.DBContext; 
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API_Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly PortfolioGenDBContext _context;

        public ProfileController(PortfolioGenDBContext context)
        {
            _context = context;
        }

        // GET: api/Profile/profiles
        [HttpGet("profiles")]
        public async Task<ActionResult<IEnumerable<Profile>>> GetProfiles()
        {
            var list = await _context.Profiles.ToListAsync<Profile>();
            return Ok(list); 
        }


        // GET: api/Profile/5
        [HttpGet("{id}")]
        [Produces("application/json")]
        public async Task<ActionResult<Profile>> GetProfile(int id)
        {
            var profiles = await _context.Profiles.FindAsync(id);

            if (profiles == null)
            {
                return NotFound("Not found");
            }

            return profiles;
        }

        [HttpGet("profiles/authenticated")]
        [Produces("application/json")]
        public async Task<ActionResult<IEnumerable<Profile>>> GetAuthenticatedProfiles()
        {
            var profiles = await _context.Profiles.Where(profile => profile.GithubUsername != null).ToListAsync();

            if(profiles == null)
            {
                return NotFound("Could not find any authenticated users"); 
            }

            return profiles; 
        }

        [HttpGet("profiles/{name}")]
        [Produces("application/json")]
        public async Task<ActionResult<Profile>> GetProfileByName(String name)
        {
            var profiles = await _context.Profiles.Where(profile => profile.ProfileName == name).FirstOrDefaultAsync();

            if (profiles == null)
            {
                return NotFound("Could not find user with that profilename");
            }

            return profiles;
        }
        // PUT: api/Profile/5
        [HttpPut("{id}")]
        [Produces("application/json")]
        public async Task<IActionResult> PutProfile(int id, [FromForm]Profile profiles)
        {
            if (id != profiles.Id)
            {
                return BadRequest();
            }

            _context.Entry(profiles).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProfilesExists(id))
                {
                    return NotFound("Profile does not exist in the DB");
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        // POST: api/Profile
        [HttpPost]
        [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status409Conflict)]
        [Produces("application/json")]
        public async Task<ActionResult<Profile>> PostProfile([FromForm]Profile profiles)

        {
            if (ProfileNameExists(profiles.ProfileName))
            {
                this.ModelState.AddModelError("Error", "Profilename already exists");
                BadRequestObjectResult conflictResult = this.BadRequest(this.ModelState);
                conflictResult.StatusCode = 409;
                return conflictResult; 
            }

            _context.Profiles.Add(profiles);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProfile", new { id = profiles.Id }, profiles);
        }

        // DELETE: api/Profile/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Profile>> DeleteProfile(int id)
        {
            var profiles = await _context.Profiles.FindAsync(id);
            if (profiles == null)
            {
                return NotFound();
            }

            _context.Profiles.Remove(profiles);
            await _context.SaveChangesAsync();

            return profiles;
        }

        private bool ProfilesExists(int id)
        {
            return _context.Profiles.Any(e => e.Id == id);
        }

        private bool ProfileNameExists(String profileName)
        {
            return _context.Profiles.Any(e => e.ProfileName == profileName);
        }
    }
}