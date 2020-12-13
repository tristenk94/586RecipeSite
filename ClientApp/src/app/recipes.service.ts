import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe, Ingredient, Direction, RecipeIngDirVM } from './types';

@Injectable({
  providedIn: 'root'
})
export default class RecipesService {
  public API = 'https://localhost:44334/api';
  public RECIPES_API = `${this.API}/recipes`;

  constructor(
    //provide http service
    private http: HttpClient,
  ) { }

  getRecipes(): Observable<Array<Recipe>> { //get all recipes
    return this.http.get<Array<Recipe>>(this.RECIPES_API);
  }

  getViewModeledRecipes(id: string): Observable<RecipeIngDirVM> {
    return this.http.get<RecipeIngDirVM>(`${this.API}/RecipeIngDir/${id}`);
  }

  getRecipeById(id: string): Observable<Recipe> {
    //console.log("id called");
    return this.http.get<Recipe>(`${this.RECIPES_API}/${id}`);
  }

  saveViewModeledRecipe(rvm: RecipeIngDirVM): Observable<RecipeIngDirVM> {
    return this.http.post<RecipeIngDirVM>(`${this.API}/RecipeIngDir`, { rvm });
     /* `${this.API}/RecipeIngDir`,
      { rvm },
      httpOptions,
    );*/
  }

  getRecipesForUser(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('/api/users/1');
  }



  saveRecipe(recipe: Recipe): Observable<Recipe> { //hybrid function of creating and updating
    let result: Observable<Recipe>;
    if (recipe.id) {
      result = this.http.put<Recipe>(
        `${this.RECIPES_API}/${recipe.id}`,
        recipe);
    } else {
      result = this.http.post<Recipe>(this.RECIPES_API, recipe);
    }
    return result;
  }


  deleteRecipe(id: string) {
    return this.http.delete(`${this.RECIPES_API}/${id.toString()}`);
  }

}
