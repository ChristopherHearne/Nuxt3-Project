using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using API_Test.Models;

namespace API_Test.DBContext
{
    public partial class PortfolioGenDBContext : DbContext
    {
        public PortfolioGenDBContext()
        {
        }

        public PortfolioGenDBContext(DbContextOptions<PortfolioGenDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Profile> Profiles { get; set; } = null!;
        public virtual DbSet<Token> Tokens { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer();
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Profile>(entity =>
            {
                entity.HasIndex(e => e.ProfileName, "UQ__Profiles__A8A4D4708AE8133A")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.About).HasMaxLength(2080);

                entity.Property(e => e.Avatar).HasMaxLength(2080);

                entity.Property(e => e.Email).HasMaxLength(2080);

                entity.Property(e => e.Facebook).HasMaxLength(2080);

                entity.Property(e => e.FirstName).HasMaxLength(55);

                entity.Property(e => e.Github).HasMaxLength(2080);

                entity.Property(e => e.GithubUsername).HasMaxLength(55);

                entity.Property(e => e.Instagram).HasMaxLength(2080);

                entity.Property(e => e.Interests).HasMaxLength(2080);

                entity.Property(e => e.LastName).HasMaxLength(55);

                entity.Property(e => e.Linkedin).HasMaxLength(2080);

                entity.Property(e => e.ProfileName).HasMaxLength(55);

                entity.Property(e => e.Title).HasMaxLength(55);

                entity.Property(e => e.Website).HasMaxLength(2080);
            });

            modelBuilder.Entity<Token>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AccessToken)
                    .HasMaxLength(55)
                    .HasColumnName("access_token");

                entity.Property(e => e.ProfileId).HasColumnName("profile_id");

                entity.Property(e => e.Scope)
                    .HasMaxLength(55)
                    .HasColumnName("scope");

                entity.Property(e => e.TokenType)
                    .HasMaxLength(55)
                    .HasColumnName("token_type");
                /*
                entity.HasOne(d => d.Profile)
                    .WithMany(p => p.Tokens)
                    .HasForeignKey(d => d.ProfileId)
                    .HasConstraintName("FK__Tokens__profile___76969D2E");
                */
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
