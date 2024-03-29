import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
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
  name: string;
  title: string;
  rating: number;
  uploadDate: string;
  Ingredients: Ingredient[];
  Directions: Direction[];


  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    //private ingredientsService: IngredientsService,
  ) { }

  ngOnInit(): void { 
    //console.log("entered detail");
    const id = this.route.snapshot.paramMap.get('id');
    this.recipesService.getViewModeledRecipes(id)
      .subscribe(VM => {
        //this.recipe = new Recipe();
        this.recipe = VM[0].recipe;

        this.name = this.recipe.name;
        this.title = VM[0].recipe.title;
        //console.log(VM[0].recipe.title);
        this.rating = VM[0].recipe.rating;
        this.uploadDate = VM[0].recipe.uploadDate;

        //this.recipe.ingredients = VM[1];
        this.recipe.Ingredients = VM[0].ingredients;
        this.Ingredients = this.recipe.Ingredients;

       // this.Ingredients = VM[0].Ingredients;
        //console.log("Ingreds");
       // console.log(this.recipe.Ingredients);
       // console.log(this.Ingredients);


        this.recipe.Directions = VM[0].directions;
        this.Directions = this.recipe.Directions;

      //  this.Directions = VM[0].Directions;

       // console.log(this.recipe.Ingredients);

        this.isLoading = false;
      });
  
  }

}
