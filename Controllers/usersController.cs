using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using recipesiteangthree.ClientApp;


namespace recipesiteangthree.Controllers
{
    //[EnableCors("MyAllowSpecificOrigins")]
    [Route("api/[controller]")]
    [ApiController]
    public class usersController : ControllerBase
    {
        private readonly RecipesTheFinal _context;

        public usersController(RecipesTheFinal context)
        {
            _context = context;
        }

        //get all of a users recipes --> combine this with the auth0?
        // GET: api/users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Recipe>>> GetRecipe(string id)
        {
            IQueryable<Recipe> userRecipes = from r in _context.Recipe
                                             where r.userid == id
                                             select r;

            if (userRecipes == null)
            {
                return NotFound();
            }

            return await userRecipes.ToListAsync();
        }
    }
}
