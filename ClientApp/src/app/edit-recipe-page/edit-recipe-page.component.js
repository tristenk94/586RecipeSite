"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditRecipePageComponent = void 0;
var core_1 = require("@angular/core");
var types_1 = require("../types");
var EditRecipePageComponent = /** @class */ (function () {
    function EditRecipePageComponent(route, router, recipeService) {
        this.route = route;
        this.router = router;
        this.recipeService = recipeService;
    }
    EditRecipePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.recipeService.getViewModeledRecipes(id)
            .subscribe(function (VM) {
            _this.recipe = VM[0].recipe;
            console.log(_this.recipe);
        });
        // .subscribe(response => {
        //   this.recipe = response;
        //   console.log(this.recipe);
        //   this.recipe.Ingredients = this.recipe.ingresults.results;
        //   this.recipe = this.recipe[2];
        // });
        console.log("edit called ngongit");
        // console.log(this.recipe.id, this.recipe.name, this.recipe.Title, this.recipe.Rating, this.recipe.UploadDate);
        //console.log(this.recipe.Ingredients);
    };
    EditRecipePageComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var name = _a.name, Title = _a.Title, Rating = _a.Rating, UploadDate = _a.UploadDate, Ingredients = _a.Ingredients, Directions = _a.Directions, userid = _a.userid;
        console.log("onsubmit called ");
        var ret = new types_1.Recipe();
        ret.name = name;
        ret.Title = Title;
        ret.Rating = Rating;
        ret.UploadDate = UploadDate;
        ret.Ingredients = Ingredients;
        ret.Directions = Directions;
        ret.userid = userid;
        this.recipeService.saveRecipe(ret)
            .subscribe(function () {
            _this.router.navigateByUrl('/my-recipes');
        });
        //alert('Saving changes to the recipe...');
        //console.log(this.recipe.id, name, Title, Rating, UploadDate);
        /* this.recipeService.editRecipe(this.recipe.id, name, Title, Rating, UploadDate, Ingredients)
           .subscribe(() => {
             //this.recipeId = this.recipe.id;
             //console.log("taken: "+this.recipeId);
             //this.recipe.Ingredients = Ingredients;
             this.router.navigateByUrl('/my-recipes');
           });*/
        //  Ingredients.forEach(ingred => {
        //   console.log(ingred.ing+ " AND "+ ingred.amt);
        //   this.ingredientsService.hybridIngredient(this.recipeId, ingred.ing, ingred.amt).subscribe();
        //  });
    };
    EditRecipePageComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-recipe-page',
            templateUrl: './edit-recipe-page.component.html',
            styleUrls: ['./edit-recipe-page.component.css']
        })
    ], EditRecipePageComponent);
    return EditRecipePageComponent;
}());
exports.EditRecipePageComponent = EditRecipePageComponent;
/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Recipe, Ingredient, Direction } from '../types';
import { fakeRecipes } from '../fake-data';

@Component({
  selector: 'app-edit-recipe-page',
  templateUrl: './edit-recipe-page.component.html',
  styleUrls: ['./edit-recipe-page.component.css']
})
export class EditRecipePageComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipe = fakeRecipes.find(recipe => recipe.id === id );
  }

  onSubmit(): void {
    alert('Saving changes to the recipe...');
    this.router.navigateByUrl('/my-recipes');
  }
}*/
//# sourceMappingURL=edit-recipe-page.component.js.map