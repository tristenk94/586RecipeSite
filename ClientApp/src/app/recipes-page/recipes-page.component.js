"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesPageComponent = void 0;
var core_1 = require("@angular/core");
var RecipesPageComponent = /** @class */ (function () {
    function RecipesPageComponent(recipesService) {
        this.recipesService = recipesService;
    }
    RecipesPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("hi");
        this.recipesService.getRecipes()
            .subscribe(function (recipes) { return _this.recipes = recipes; });
    };
    RecipesPageComponent = __decorate([
        core_1.Component({
            selector: 'app-recipes-page',
            templateUrl: './recipes-page.component.html',
            styleUrls: ['./recipes-page.component.css']
        })
    ], RecipesPageComponent);
    return RecipesPageComponent;
}());
exports.RecipesPageComponent = RecipesPageComponent;
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
//# sourceMappingURL=recipes-page.component.js.map