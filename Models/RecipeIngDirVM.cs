using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace recipesiteangthree
{
    public class RecipeIngDirVM
    {
        public Recipe recipe { get; set; } //the recipe found

        public List<Ingredient> ingredients { get; set; } //the ingredients found for this recipe

        public List<Direction> directions { get; set; } //the directions found for this recipe

    }
}
