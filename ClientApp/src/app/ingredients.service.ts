import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { Recipe, Ingredient, Direction, RecipeIngDirVM } from './types';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  public API = '';
  public INGREDIENTS_API = '';

  /*public API = 'https://localhost:44334/api';
  public INGREDIENTS_API = `${this.API}/ingredients`;*/

  base: string = "";
  http: HttpClient;

  constructor(
    //provide http service
    http: HttpClient,
    @Inject(`BASE_URL`) baseURL: string

  ) {
    this.API = `${baseURL}api`;
    this.INGREDIENTS_API = `${this.API}/ingredients`;
    this.http = http;
  }

  /*constructor(
    //provide http service
    private http: HttpClient,
  ) { }*/

  getIngredientsForId(id: string): Observable<Ingredient[]> {
    //console.log("id called");
    return this.http.get<Ingredient[]>(`${this.INGREDIENTS_API}/${id}`);
  }

  deleteIngredient(id: string) {
    return this.http.delete(`${this.INGREDIENTS_API}/${id.toString()}`);
  }

  saveIngredient(ingredient: Ingredient): Observable<Ingredient> {
    let result: Observable<Ingredient>; //is ingredeint valid
    if (ingredient.ingredientId) {
      result = this.http.put<Ingredient>(
        `${this.INGREDIENTS_API}/${ingredient.ingredientId}`,
        ingredient);

    } else { //if not create new one
      result = this.http.post<Ingredient>(this.INGREDIENTS_API, ingredient);
    }
    return result;
  }

}
