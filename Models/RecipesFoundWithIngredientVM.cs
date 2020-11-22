using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace RecipeSiteEpic.Models
{
    public class RecipesFoundWithIngredientVM
    {
        public List<Recipe> Recipes { get; set; } //list of all recipes located

        public string recipeIngredient { get; set; } //ingredient to search by

        public string SearchString { get; set; } //search by name
    }
  
}
