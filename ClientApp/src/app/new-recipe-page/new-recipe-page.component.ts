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

  onSubmit({ name, Title, Rating, UploadDate, userid, Ingredients, Directions } ): void {
      
    this.recipe.name = name;
    this.recipe.Title = Title;
    this.recipe.Rating = Rating;
    this.recipe.UploadDate = UploadDate;
    this.recipe.userid = userid;
    this.recipe.Directions = Directions;
    this.recipe.Ingredients = Ingredients;


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

  }

}
