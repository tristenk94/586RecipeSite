using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using recipesiteangthree;
using recipesiteangthree.ClientApp;

namespace recipesiteangthree.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientsController : ControllerBase
    {
        private readonly RecipesTheFinal _context;

        public IngredientsController(RecipesTheFinal context)
        {
            _context = context;
        }

        // GET: api/Ingredients
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ingredient>>> GetIngredient()
        {
            return await _context.Ingredient.ToListAsync();
        }

        // GET: api/Ingredients/{RECIPEID}
        [HttpGet("{recipeID}")]
        public async Task<ActionResult<IEnumerable<Ingredient>>> GetIngredientsForRecipe(string recipeID)
        {
            IQueryable<Ingredient> ingreds = from i in _context.Ingredient
                                             where i.recipeLink == recipeID
                                             select i;/* new Ingredient
                                             {
                                                 ingredientAmount = i.ingredientAmount,
                                                 ingredientId = i.ingredientId,
                                                 ingredientName = i.ingredientName,
                                                 recipeLink = i.recipeLink,
                                                 userid = i.userid,
                                             };*/
            

            if (ingreds == null)
            {
                return NotFound();
            }

            return await ingreds.ToListAsync();
        }


        /* // GET: api/Ingredients/5
         [HttpGet("{id}")]
         public async Task<ActionResult<Ingredient>> GetIngredient(int id)
         {
             var ingredient = await _context.Ingredient.FindAsync(id);

             if (ingredient == null)
             {
                 return NotFound();
             }

             return ingredient;
         } */

        // PUT: api/Ingredients/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIngredient(string id, Ingredient ingredient)
        {
            if (id != ingredient.ingredientId)
            {
                return BadRequest();
            }

            _context.Entry(ingredient).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IngredientExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Ingredients
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Ingredient>> PostIngredient(Ingredient ingredient)
        {
            _context.Ingredient.Add(ingredient);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIngredient", new { id = ingredient.ingredientId }, ingredient);
        }

        // DELETE: api/Ingredients/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Ingredient>> DeleteIngredient(string id)
        {
            var ingredient = await _context.Ingredient.FindAsync(id);
            if (ingredient == null)
            {
                return NotFound();
            }

            _context.Ingredient.Remove(ingredient);
            await _context.SaveChangesAsync();

            return ingredient;
        }

        private bool IngredientExists(string id)
        {
            return _context.Ingredient.Any(e => e.ingredientId == id);
        }
    }
}
