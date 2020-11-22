using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecipeSiteEpic.Data;
using RecipeSiteEpic.Models;

namespace RecipeSiteEpic.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeWithIngredientsAndDirectionsControllerAPI : ControllerBase
    {
        private readonly RecipeContext _context;

        public RecipeWithIngredientsAndDirectionsControllerAPI(RecipeContext context)
        {
            _context = context;
        }

        // GET: api/RecipeWithIngredientsAndDirectionsAPI/5
        /*[HttpGet("{id}")]
        public async Task<IActionResult> GetRecipeWithIngredientsAndDirections([FromRoute] int id)
        {
            var recipeWithIngredientsAndDirections = from a in _context.Recipe
                                                     where a.Id == id
                                                     select new RecipeWithIngredientsAndDirectionsVM
                                                     {
                                                         Ingredient = a.
                                                     } //left off viewmodel vid at 29:54
           /* if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var recipe = await _context.Recipe.FindAsync(id);

            if (recipe == null)
            {
                return NotFound();
            }

           // return Ok(recipe); 
        }*/

        // GET: Recipes/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var recipe = await _context.Recipe
                .FirstOrDefaultAsync(m => m.Id == id);
            if (recipe == null)
            {
                return NotFound();
            }

            return View(recipe);
        }

        private IActionResult View(Recipe recipe)
        {
            throw new NotImplementedException();
        }

        //GET : /Ingredients/Details/5
        public IActionResult Details(int id)
        {
            var r = new Recipe { Title = "Recipe " + id };
            return View(r);
        }


    }
}
