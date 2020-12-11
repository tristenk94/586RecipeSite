"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewRecipePageComponent = void 0;
var core_1 = require("@angular/core");
var types_1 = require("../types");
var NewRecipePageComponent = /** @class */ (function () {
    function NewRecipePageComponent(router, recipeService) {
        this.router = router;
        this.recipeService = recipeService;
        //recipeId: string;// = uuid();
        this.recipe = new types_1.Recipe();
        this.ingredients = [];
        this.directions = [];
    }
    NewRecipePageComponent.prototype.ngOnInit = function () {
        //this.recipe = new Recipe();
    };
    NewRecipePageComponent.prototype.onSubmit = function (_a) {
        //this.recipe.id = uuid(); //give this recipe to have an id
        var _this = this;
        var name = _a.name, Title = _a.Title, Rating = _a.Rating, UploadDate = _a.UploadDate, userid = _a.userid, Ingredients = _a.Ingredients, Directions = _a.Directions;
        //alert('Yummy, creating a new recipe...');
        //if not just generate the id here and modify everything else to use it...
        //console.log("attempting to create " + this.recipe.id );
        /* this.recipeService.createRecipe(this.recipeId, name, Title, Rating, UploadDate, Ingredients).subscribe(() => {
           this.router.navigateByUrl('/my-recipes');
         });*/
        //let rid = new RecipeIngDirVM();
        //rid.recipe = recipe;
        //rid.ingredients = ingredients;
        //rid.directions = directions;
        this.recipe.name = name;
        this.recipe.Title = Title;
        this.recipe.Rating = Rating;
        this.recipe.UploadDate = UploadDate;
        this.recipe.userid = userid;
        this.recipe.Directions = Directions;
        this.recipe.Ingredients = Ingredients;
        this.recipe.Ingredients.forEach(function (ing) {
            ing.recipeLink = _this.recipe.id;
        });
        this.recipeService.saveRecipe(this.recipe)
            .subscribe(function () {
            _this.router.navigateByUrl('/my-recipes');
            _this.recipe.Ingredients.forEach(function (ing) {
                ing.recipeLink = _this.recipe.id;
            });
            _this.recipe.Directions.forEach(function (dir) {
                dir.recipeLink = _this.recipe.id;
            });
        });
        /* this.recipeService.saveViewModeledRecipe(rid)
           .subscribe(() => {
             console.log("created somthing");
             this.router.navigateByUrl('/my-recipes');
           });*/
        //this.recipeService.saveRecipe(recipe)
    };
    NewRecipePageComponent = __decorate([
        core_1.Component({
            selector: 'app-new-recipe-page',
            templateUrl: './new-recipe-page.component.html',
            styleUrls: ['./new-recipe-page.component.css']
        })
    ], NewRecipePageComponent);
    return NewRecipePageComponent;
}());
exports.NewRecipePageComponent = NewRecipePageComponent;
/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe, Ingredient, Direction } from '../types';

@Component({
  selector: 'app-new-recipe-page',
  templateUrl: './new-recipe-page.component.html',
  styleUrls: ['./new-recipe-page.component.css']
})
export class NewRecipePageComponent implements OnInit {
 
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Yummy, creating a new recipe...');
    this.router.navigateByUrl('/my-recipes');
  }

}
*/
//# sourceMappingURL=new-recipe-page.component.js.map