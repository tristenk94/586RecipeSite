import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import RecipesService from '../recipes.service';
//import { IngredientsService } from '../ingredients.service';
import { Recipe } from '../types';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.css']
})
export class RecipeDetailPageComponent implements OnInit {
  isLoading: boolean = true; //bool to control display if an object is loading
  recipe: Recipe = null;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    //private ingredientsService: IngredientsService,
  ) { }

  ngOnInit(): void {
    console.log("entered detail");
    const id = this.route.snapshot.paramMap.get('id');
    this.recipesService.getViewModeledRecipes(id)
      .subscribe(VM => {
        this.recipe = VM[0].recipe;
        console.log(this.recipe);
        //this.recipe.ingredients = VM[1];
        //this.recipe.directions = VM[2];
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
