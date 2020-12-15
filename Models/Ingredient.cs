using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace recipesiteangthree
{
    public class Ingredient
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public string ingredientId { get; set; }
        public string ingredientName { get; set; }
        public string ingredientAmount { get; set; }
        public string recipeLink { get; set; }
        [Required]
        public string userid { get; set; } //the user id of the person who created this ingredient

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

    }

}

