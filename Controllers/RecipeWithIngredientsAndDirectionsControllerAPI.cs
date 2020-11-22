using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecipeSiteEpic.Data;
using RecipeSiteEpic.Models;
using RecipeSiteEpic.ViewModels;

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

        [HttpGet("{id}")]
        public async Task<ActionResult<List<RecipeWithIngredientsAndDirectionsVM>>> GetRecipeWithIngredientsAndDirections(int id)
        {//we are getting all the ingredients associated with a recipe, dont have to slect from a list, the selecting of a recipe controls that (in recipes controller?)
            IQueryable<RecipeWithIngredientsAndDirectionsVM> recipeWIAD = from r in _context.Recipe
                                                                          where r.Id == id
                                                                          select new RecipeWithIngredientsAndDirectionsVM
                                                                          {
                                                                              recipe = r,
                                                                              ingredients = r.Ingredients,//.Select(i => i.ingredientName).ToList(),
                                                                              directions = r.Directions,
                                                                          };
            return await recipeWIAD.ToListAsync();
        }

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
