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
  recipe: Recipe = new Recipe();
  ingredients: Ingredient[] = [];
  directions: Direction[] = [];


  constructor(
    private router: Router,
    private recipeService: RecipesService,
    //private ingredientsService: IngredientsService,
  ) { }

  ngOnInit(): void {
    //this.recipe = new Recipe();
  }

  onSubmit( {name, Title, Rating, UploadDate, userid, Ingredients, Directions } ): void {
    //this.recipe.id = uuid(); //give this recipe to have an id

    //alert('Yummy, creating a new recipe...');

    //if not just generate the id here and modify everything else to use it...
    //console.log("attempting to create " + this.recipe.id );
   /* this.recipeService.createRecipe(this.recipeId, name, Title, Rating, UploadDate, Ingredients).subscribe(() => {
      this.router.navigateByUrl('/my-recipes');
    });*/

    //let rid = new RecipeIngDirVM();
    //rid.recipe = recipe;
    //rid.ingredients = ingredients;
    //rid.directions = directions;



    
    this.recipe.name = name;
    this.recipe.Title = Title;
    this.recipe.Rating = Rating;
    this.recipe.UploadDate = UploadDate;
    this.recipe.userid = userid;
    this.recipe.Directions = Directions;
    this.recipe.Ingredients = Ingredients;

    this.recipe.Ingredients.forEach(ing => {
      ing.recipeLink = this.recipe.id;
    });


    this.recipeService.saveRecipe(this.recipe)
      .subscribe(() => {
        this.router.navigateByUrl('/my-recipes');

        this.recipe.Ingredients.forEach(ing => { //link the ingredients
          ing.recipeLink = this.recipe.id;
        });

        this.recipe.Directions.forEach(dir => { //link the directions
          dir.recipeLink = this.recipe.id;
        });

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
