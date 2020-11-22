using RecipeSiteEpic.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipeSiteEpic.ViewModels
{
    public class RecipeWithIngredientsAndDirectionsVM //vm to assist in displaying a recipe with its related ingredients
    {
        public Recipe recipe { get; set; }
        public List<Ingredient> ingredients { get; set; } //all the ingredients in this recipe, list form
        public List<Direction> directions { get; set; } //all the directions in this recipe, list form

    }
}
