using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using recipesiteangthree;
using recipesiteangthree.ClientApp;

namespace recipesiteangthree.Controllers
{
    //[EnableCors("MyAllowSpecificOrigins")]
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeIngDirController : ControllerBase
    {
        private readonly RecipesTheFinal _context;

        public RecipeIngDirController(RecipesTheFinal context)
        {
            _context = context;
        }


        // GET: api/RecipeIngDir/5
        [HttpGet("{id}")]
        public async Task<ActionResult<List<RecipeIngDirVM>>> GetRecipeIngDir(string id)
        {
           

            //the best way i selected all ingredients and directions related to a recipe :D
            var ingreds = from i in _context.Ingredient
                              where i.recipeLink == id
                              select i;

            var directs = from d in _context.Direction
                             where d.recipeLink == id
                             select d;

          IQueryable<RecipeIngDirVM> RecipeIngDir = from r in _context.Recipe
                                                    where r.Id == id
                                                    select new RecipeIngDirVM
                                                    {
                                                        recipe = r,
                                                        ingredients = ingreds.ToList(),
                                                        directions = directs.ToList(),
                                                    };


            return await RecipeIngDir.ToListAsync();
        }

        // saving recipe
        // PUT: api/RecipeIngDir/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecipeIngDir(string id, RecipeIngDirVM RecipeIngDir)
        {
            if (id != RecipeIngDir.recipe.Id)
            {
                return BadRequest();
            }

            _context.Entry(RecipeIngDir).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecipeIngDirExists(id))
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

        // new recipe creation
        // POST: api/RecipeIngDir
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<RecipeIngDirVM>> PostRecipeIngDir(RecipeIngDirVM RecipeIngDir)
        {
            _context.Recipe.Add(RecipeIngDir.recipe);

           /*foreach(Ingredient i in RecipeIngDir.ingredients)
           {
               _context.Ingredient.Add(i);
           }

            foreach (Direction d in RecipeIngDir.directions)
            {
                _context.Direction.Add(d);
            }*/

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRecipe", new { id = RecipeIngDir.recipe.Id }, RecipeIngDir);
        }

        // DELETE: api/RecipeIngDir/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Recipe>> DeleteRecipeIngDir(string id)
        {
            var recipe = await _context.Recipe.FindAsync(id);
            if (recipe == null)
            {
                return NotFound();
            }

            _context.Recipe.Remove(recipe);
            await _context.SaveChangesAsync();

            return recipe;
        }

        private bool RecipeIngDirExists(string id)
        {
            return _context.Recipe.Any(e => e.Id == id);
        }
    }
}
