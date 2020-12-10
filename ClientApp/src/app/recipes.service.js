"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RecipesService = /** @class */ (function () {
    function RecipesService(
    //provide http service
    http) {
        this.http = http;
        this.API = 'https://localhost:44334/api';
        this.RECIPES_API = this.API + "/recipes";
    }
    RecipesService.prototype.getRecipes = function () {
        return this.http.get(this.RECIPES_API);
    };
    RecipesService.prototype.getViewModeledRecipes = function (id) {
        return this.http.get(this.API + "/RecipeIngDir/" + id);
    };
    RecipesService.prototype.getRecipeById = function (id) {
        //console.log("id called");
        return this.http.get(this.RECIPES_API + "/" + id);
    };
    RecipesService.prototype.saveViewModeledRecipe = function (rvm) {
        return this.http.post(this.API + "/RecipeIngDir", { rvm: rvm });
        /* `${this.API}/RecipeIngDir`,
         { rvm },
         httpOptions,
       );*/
    };
    RecipesService.prototype.getRecipesForUser = function () {
        return this.http.get('/api/users/1'); //revisit with authentication
    };
    RecipesService.prototype.saveRecipe = function (recipe) {
        var result;
        if (recipe.id) {
            result = this.http.put(this.RECIPES_API + "/" + recipe.id, recipe);
        }
        else {
            result = this.http.post(this.RECIPES_API, recipe);
        }
        return result;
    };
    RecipesService.prototype.deleteRecipe = function (id) {
        return this.http.delete(this.RECIPES_API + "/" + id.toString());
    };
    RecipesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RecipesService);
    return RecipesService;
}());
exports.default = RecipesService;
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
//# sourceMappingURL=recipes.service.js.map