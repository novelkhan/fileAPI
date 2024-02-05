using fileAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace fileAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public virtual DbSet<FileData> FileData { get; set; }
    }
}
