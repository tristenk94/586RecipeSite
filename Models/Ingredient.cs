using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RecipeSiteEpic.Models
{
    public class Ingredient
    {
        [Key]
        public int ingredientNum { get; set; }
        public string ingredientName { get; set; }
        public string ingredientAmount { get; set; }

        public Ingredient() //default ctor
        {

        }

        public Ingredient(string iName) //ctor to assist in setting up instances
        {
            ingredientName = iName;
        }

        public Ingredient(string iName, string iAmt) //another ctor with vals
        {
            ingredientName = iName;
            ingredientAmount = iAmt;
        }

        /*//specify a ienumeraable viewtemplate as inc 
        [UIHint("ing")]
        public IEnumerable<Ingredient> ing { get; set; }*/

    }

}
