using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RecipeSiteEpic.Models;

namespace RecipeSiteEpic.Data
{
    public class RecipeContext : DbContext
    {
        public RecipeContext (DbContextOptions<RecipeContext> options)
            : base(options)
        {
        }

        public DbSet<RecipeSiteEpic.Models.Recipe> Recipe { get; set; }
    }
}
