import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import RecipesService from '../recipes.service';
//import { IngredientsService } from '../ingredients.service';
import { Direction, Ingredient, Recipe } from '../types';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.css']
})
export class RecipeDetailPageComponent implements OnInit {
  isLoading: boolean = true; //bool to control display if an object is loading
  recipe: Recipe;
  Ingredients: Ingredient[];
  Directions: Direction[];

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    //private ingredientsService: IngredientsService,
  ) { }

  ngOnInit(): void { //some reason recipe is undefined but it is...?
    //console.log("entered detail");
    const id = this.route.snapshot.paramMap.get('id');
    this.recipesService.getViewModeledRecipes(id)
      .subscribe(VM => {
        this.recipe = new Recipe();
        this.recipe = VM[0].recipe;
        //this.recipe.ingredients = VM[1];
        this.recipe.Ingredients = VM[0].ingredients;
        this.Ingredients = VM[0].Ingredients;

        this.recipe.Directions = VM[0].directions;
        this.Directions = VM[0].Directions;

       // console.log(this.recipe.Ingredients);

        this.isLoading = false;
      });
    /*this.recipesService.addViewToRecipe(id)
      .subscribe(() => console.log('Views updated!'));*/

    /*this.ingredientsService.getIngredientsByRecipeId(id)
      .subscribe(ingredients => {
        this.recipe.Ingredients = ingredients;
      });*/
  }

}


/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeRecipes } from '../fake-data';
import { Recipe } from '../types';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.css']
})
export class RecipeDetailPageComponent implements OnInit {
  
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipe = fakeRecipes.find(recipe => recipe.id === id);
  }

}
*/
