using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using RecipeSiteEpic.Data;
using RecipeSiteEpic.Models;

namespace RecipeSiteEpic.Controllers
{
    public class RecipesController : Controller
    {
        private readonly RecipeContext _context;

        public RecipesController(RecipeContext context)
        {
            _context = context;
        }

        // GET: Recipes
        //[HttpPost]
        public async Task<IActionResult> Index(string recipeIngredient, string searchString)
        {

            IQueryable<string> ingQuery = from r in _context.Recipe
                                          orderby r.Name
                                          select r.Name;
            //where r.Ingredients.Contains(new Ingredient(recipeIngredient))

            var recipes = from r in _context.Recipe
                          select r;


            if (!String.IsNullOrEmpty(searchString))//regular name search
            {
                recipes = recipes.Where(s => s.Name.Contains(searchString) || s.Title.Contains(searchString));
            }

            if(!String.IsNullOrEmpty(recipeIngredient))
            {
                recipes = recipes.Where(x => x.findIngredient(recipeIngredient)); 
                //uses a helper function to see if an ingredient exists with the ingredient list of a recipe
            }

            var RecipesFoundWithIngredients = new RecipesFoundWithIngredientVM
            {
                Recipes = await recipes.ToListAsync() //recipes is a list of the search ingredient and search string
            };

            return View(RecipesFoundWithIngredients);




            /*this is just  for name
             * var recipes = from r in _context.Recipe
                          select r;

            if(!String.IsNullOrEmpty(searchString))
            {
                recipes = recipes.Where(s => s.Name.Contains(searchString));//||s.Ingredients.GetEnumerator().ingredientName.Contains(searchString));
            }

            return View(await recipes.ToListAsync());*/
            //return View(await _context.Recipe.ToListAsync());
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

        // GET: Recipes/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Recipes/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Title,Name,UploadDate,Rating,Ingredients,Directions,timesFavorited")] Recipe recipe)
        {
            if (ModelState.IsValid)
            {
                _context.Add(recipe);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(recipe);
        }

        // GET: Recipes/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var recipe = await _context.Recipe.FindAsync(id);
            if (recipe == null)
            {
                return NotFound();
            }
            return View(recipe);
        }

        // POST: Recipes/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Title,Name,UploadDate,Rating,Ingredients,Directions,timesFavorited")] Recipe recipe)
        {
            if (id != recipe.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(recipe);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!RecipeExists(recipe.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(recipe);
        }

        // GET: Recipes/Delete/5
        public async Task<IActionResult> Delete(int? id)
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

        // POST: Recipes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var recipe = await _context.Recipe.FindAsync(id);
            _context.Recipe.Remove(recipe);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool RecipeExists(int id)
        {
            return _context.Recipe.Any(e => e.Id == id);
        }
    }
}
