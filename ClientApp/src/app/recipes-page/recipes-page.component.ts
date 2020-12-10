import { Component, OnInit } from '@angular/core';
import { Recipe } from '../types';
import RecipesService from '../recipes.service';


@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent implements OnInit {

  recipes: Array<Recipe>;

  constructor(
    private recipesService: RecipesService,
  ) { }

  ngOnInit(): void { //making a request error
    console.log("hi");
    this.recipesService.getRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }

}


/*import { Component, OnInit } from '@angular/core';
import { Recipe } from '../types';
import { fakeRecipes } from '../fake-data';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor() { }

  ngOnInit(): void { //loading data on initialization
    this.recipes = fakeRecipes;
  }

}
*/
