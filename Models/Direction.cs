using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RecipeSiteEpic.Models
{
    public class Direction
    {
        [Key]
        public int stepNumber { get; set; }
        public string step { get; set; }

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
