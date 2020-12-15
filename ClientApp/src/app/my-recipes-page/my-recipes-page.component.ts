import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../types'
//import { OktaAuthService } from '../app.service';


@Component({
  selector: 'app-my-recipes-page',
  templateUrl: './my-recipes-page.component.html',
  styleUrls: ['./my-recipes-page.component.css']
})
export class MyRecipesPageComponent implements OnInit {

  recipes: Recipe[] = [];
  //oktaUserId: string;


  constructor(
    private recipesService: RecipesService,
    //public oktaAuth: OktaAuthService,
  ) { }

  //load recipes for page
  ngOnInit(): void {
    this.recipesService.getRecipesForUser()//this.oktaUserId)
      .subscribe(recipes => this.recipes = recipes);
  }

  onDeleteClicked(recipeId: string): void {
    //alert(`Deleting your recipe with id ${recipeId}`)
    this.recipesService.deleteRecipe(recipeId)
      .subscribe(() => {
        this.recipes = this.recipes.filter(
          recipe => recipe.id !== recipeId
        );
      });
  }

}
