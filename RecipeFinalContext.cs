using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using recipesiteangthree;

namespace recipesiteangthree.ClientApp
{
    public class RecipeFinalContext : DbContext
    {
        public RecipeFinalContext(DbContextOptions<RecipeFinalContext> options) : base(options)
        {

        }

        public DbSet<Recipe> Recipe {get; set; }

        public DbSet<Ingredient> Ingredient { get; set; }

        public DbSet<Direction> Direction { get; set; }

    }
}
