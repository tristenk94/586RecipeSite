import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Recipe, Ingredient, Direction } from '../types';
import RecipesService from '../recipes.service';
//import { IngredientsService } from '../ingredients.service';
//import { Title } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import IngredientsService from '../ingredients.service';
import DirectionsService from '../directions.service';

@Component({
  selector: 'app-edit-recipe-page',
  templateUrl: './edit-recipe-page.component.html',
  styleUrls: ['./edit-recipe-page.component.css']
})
export class EditRecipePageComponent implements OnInit {
  recipe: Recipe;
  ingredients: Ingredient[]
  directions: Direction[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipesService,
    private ingredientsService: IngredientsService,
    private directionsService: DirectionsService,
  ) { }

  ngOnInit(): void { //get the recipe
    const id = this.route.snapshot.paramMap.get('id');
    this.recipeService.getViewModeledRecipes(id)
      .subscribe(VM => {
        this.recipe = VM[0].recipe;
      
        this.recipe.Ingredients = VM[0].ingredients;
       
        //console.log(this.recipe.Ingredients);

        this.recipe.Directions = VM[0].directions;
        //console.log(VM[0].directions);
       // console.log(this.recipe.Ingredients);
      });

  

    //console.log("edit called ngongit");
   // console.log(this.recipe.id, this.recipe.name, this.recipe.Title, this.recipe.Rating, this.recipe.UploadDate);
    //console.log(this.recipe.Ingredients);
  }

  onSubmit({ name, Title, Rating, UploadDate, userid, Ingredients, Directions }): void { //update the recipe

    //console.log("onsubmit called ");
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
      });
  
  }

}
