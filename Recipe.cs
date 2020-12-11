using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace recipesiteangthree
{
  public class Recipe
  {

    //id# of recipe
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Key]
    public string Id { get; set; }

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

    [Required]
    public string userid { get; set; } //the user id of the person who created this recipe

    }
}
