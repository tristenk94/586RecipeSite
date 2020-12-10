using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace recipesiteangthree
{
    public class Direction
    {

        [Key]
        public int directionId{ get; set; }

        public int stepNumber { get; set; }
        public string step { get; set; }

        public int recipeLink { get; set; }

        [Required]
        public string userid { get; set; } //the user id of the person who created this direction


        public Direction()
        {

        }

        public Direction(string action)
        {
            step = action;
        }

        public Direction(int sNum, string action)
        {
            stepNumber = sNum;
            step = action;
        }
    }
}
