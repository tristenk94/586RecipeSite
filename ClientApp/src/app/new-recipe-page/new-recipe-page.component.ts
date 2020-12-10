import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import RecipesService from '../recipes.service';
//import { IngredientsService } from '../ingredients.service';
import { v4 as uuid } from 'uuid';
import { Recipe, Ingredient, Direction, RecipeIngDirVM } from '../types';


@Component({
  selector: 'app-new-recipe-page',
  templateUrl: './new-recipe-page.component.html',
  styleUrls: ['./new-recipe-page.component.css']
})
export class NewRecipePageComponent implements OnInit {
  //recipeId: string;// = uuid();
  recipe: Recipe;
  ingredients: Ingredient[]
  directions: Direction[];


  constructor(
    private router: Router,
    private recipeService: RecipesService,
    //private ingredientsService: IngredientsService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit( {name, Title, Rating, UploadDate, Ingredients, Directions, userid } ): void {
    //this.recipe.id = uuid(); //give this recipe to have an id

    //alert('Yummy, creating a new recipe...');

    //if not just generate the id here and modify everything else to use it...
    console.log("attempting to create " + this.recipe.id );
   /* this.recipeService.createRecipe(this.recipeId, name, Title, Rating, UploadDate, Ingredients).subscribe(() => {
      this.router.navigateByUrl('/my-recipes');
    });*/

    //let rid = new RecipeIngDirVM();
    //rid.recipe = recipe;
    //rid.ingredients = ingredients;
    //rid.directions = directions;



    let ret = new Recipe();
    ret.name = name;
    ret.Title = Title;
    ret.Rating = Rating;
    ret.UploadDate = UploadDate;
    ret.Ingredients = Ingredients;
    ret.Directions = Directions;
    ret.userid = userid;


    this.recipeService.saveRecipe(ret)
      .subscribe(() => {
        this.router.navigateByUrl('/my-recipes');
      });

   /* this.recipeService.saveViewModeledRecipe(rid)
      .subscribe(() => {
        console.log("created somthing");
        this.router.navigateByUrl('/my-recipes');
      });*/
    //this.recipeService.saveRecipe(recipe)

  }

}


/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe, Ingredient, Direction } from '../types';

@Component({
  selector: 'app-new-recipe-page',
  templateUrl: './new-recipe-page.component.html',
  styleUrls: ['./new-recipe-page.component.css']
})
export class NewRecipePageComponent implements OnInit {
 
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Yummy, creating a new recipe...');
    this.router.navigateByUrl('/my-recipes');
  }

}
*/
