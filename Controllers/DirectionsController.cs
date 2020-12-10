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
    public class DirectionsController : ControllerBase
    {
        private readonly RecipeFinalContext _context;

        public DirectionsController(RecipeFinalContext context)
        {
            _context = context;
        }

        // GET: api/Directions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Direction>>> GetDirection()
        {
            return await _context.Direction.ToListAsync();
        }


        // GET: api/Directions/{RECIPEID}
        [HttpGet("{recipeID}")]
        public async Task<ActionResult<IEnumerable<Direction>>> GetDirectionsForRecipe(int recipeID)
        {
            IQueryable<Direction> directs = from d in _context.Direction
                                             where d.recipeLink == recipeID
                                             select d;

            if (directs == null)
            {
                return NotFound();
            }

            return await directs.ToListAsync();
        }

        /*// GET: api/Directions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Direction>> GetDirection(int id)
        {
            var direction = await _context.Direction.FindAsync(id);

            if (direction == null)
            {
                return NotFound();
            }

            return direction;
        }*/

        // PUT: api/Directions/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDirection(int id, Direction direction)
        {
            if (id != direction.directionId)
            {
                return BadRequest();
            }

            _context.Entry(direction).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DirectionExists(id))
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

        // POST: api/Directions
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Direction>> PostDirection(Direction direction)
        {
            _context.Direction.Add(direction);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDirection", new { id = direction.directionId }, direction);
        }

        // DELETE: api/Directions/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Direction>> DeleteDirection(int id)
        {
            var direction = await _context.Direction.FindAsync(id);
            if (direction == null)
            {
                return NotFound();
            }

            _context.Direction.Remove(direction);
            await _context.SaveChangesAsync();

            return direction;
        }

        private bool DirectionExists(int id)
        {
            return _context.Direction.Any(e => e.directionId == id);
        }
    }
}
