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
    return this.http.get<Recipe[]>('/api/users/1');//revisit with authentication
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



/*import { Injectable } from '@angular/core';
import { Recipe, Ingredient, Direction } from './types';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

//can be injected in any component
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  ret: string;

  constructor(
    //provide http service
    private http: HttpClient,
  ) { }

  //observable is task in which users subscribe to
  getRecipes() : Observable<Recipe[]> {
    return this.http.get<Recipe[]>('/api/recipes');
  }

  getRecipeById(id: string): Observable<Recipe> {
    //console.log("id called");
    return this.http.get<Recipe>(`/api/recipes/${id}`);
  }

  locateRecipeId(name: string, Title: string, Rating: number): Observable<Recipe> {
   return this.http.post<Recipe>(
      '/api/recipes/LOCATION',
      {name, Title, Rating},
      httpOptions,
    );
  }


  addViewToRecipe(id: string): Observable<Recipe> {
   // console.log("view called");
    return this.http.post<Recipe>(
      `/api/recipes/${id}/add-view`,
      {},
      httpOptions,
    );
  }
  
  getRecipesForUser(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('/api/users/1/recipes');//revisit with authentication
  }

  deleteRecipe(id: string): Observable<any> {
    return this.http.delete<any>(`/api/recipes/${id}`);
  }

  createRecipe(id: string, name: string, Title: string, Rating: number, UploadDate: string, Ingredient: Ingredient[]): Observable<Recipe> { //ing and dir go here
    return this.http.post<Recipe>(
      '/api/recipes',
      {id, name, Title, Rating, UploadDate, Ingredient},
      httpOptions,
    );
  } 

  editRecipe(id: string, name: string, Title: string, Rating: number, UploadDate: string, Ingredient: Ingredient[]): Observable<Recipe> { //ing and dir go here
    return this.http.post<Recipe>(
      `/api/recipes/${id}`,
      { name, Title, Rating, UploadDate, Ingredient },
      httpOptions,
      )
  }

}*/
