import { Component, OnInit } from '@angular/core';
import RecipesService from '../recipes.service';
import { Recipe } from '../types'

@Component({
  selector: 'app-my-recipes-page',
  templateUrl: './my-recipes-page.component.html',
  styleUrls: ['./my-recipes-page.component.css']
})
export class MyRecipesPageComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(
    private recipesService: RecipesService,
  ) { }

  //load recipes for page
  ngOnInit(): void {
    this.recipesService.getRecipesForUser()
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
