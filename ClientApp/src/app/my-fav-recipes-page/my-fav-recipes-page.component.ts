import { Component, OnInit } from '@angular/core';
//import { fakeRecipes } from '../fake-data';
import { Recipe } from '../types'

@Component({
  selector: 'app-my-fav-recipes-page',
  templateUrl: './my-fav-recipes-page.component.html',
  styleUrls: ['./my-fav-recipes-page.component.css']
})
export class MyFavRecipesPageComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor() { }

  ngOnInit(): void {
    //this.recipes = fakeRecipes;
  }

  onDeleteClicked(recipeId: string): void {
    alert(`Deleting your recipe with id ${recipeId}`)
  }

}
