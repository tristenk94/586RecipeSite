using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;



namespace RecipeSiteEpic.Models
{
    public class Recipe
    {
        //id# of recipe
        public int Id { get; set; }

        [StringLength(100, MinimumLength = 3)]
        [Required]
        public string Title { get; set; } //the title of the recipe page

        [StringLength(100, MinimumLength = 3)]
        [Required]
        public string Name { get; set; } //the name of the recipe

        //[DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)] //tells system EXACTLY what to expect, eg date
        [Display(Name = "Upload Date"), DataType(DataType.Date)]
        public DateTime UploadDate { get; set; } //date recipe uploaded

        [RegularExpression(@"[1-5]"), StringLength(1)]
        public string Rating { get; set; }

        [Required]
        public List<Ingredient> Ingredients { get; set; } //all the ingredients in this recipe, list form
       
        [Required]
        public List<Direction> Directions { get; set; } //all the directions in this recipe, list form

        //public List<string>
        //public List<string> item { get; set; }
        //public List<string> amts { get; set; }

        //public List<List<string>, List<string>> ingred { get; set; }

        public int timesFavorited { get; set; } //the amount of times this recipe was favorited


        /*NOTE
        -any user can view + fav recipes
        -only admins can edit/create new recipes
        -timesFavorited is hidden in create/edit view
        */

        //helper method to get if a list contains an ingredient
        public bool findIngredient(List<Ingredient> i, string search)
        {
            Console.Write("called");

            foreach (Ingredient x in i)
            {
                if(x.ingredientName == search)
                {
                    Console.Write("found");
                    return true;//if found a match, exit
                }
            }
            return false; //if got here, none found
        }

        public bool findIngredient(string search)
        {
            List<Ingredient> i = this.Ingredients;

            Console.Write("called2" + i);

            if(i != null)
             {
                foreach (var x in i)
                {
                    if (x.ingredientName == search)
                    {
                        Console.Write("found2");
                        return true;//if found a match, exit
                    }
                }
            }
            else
            {
                Console.WriteLine("aaaaaa");
            }
          
            return false; //if got here, none found
        }

    }
}
