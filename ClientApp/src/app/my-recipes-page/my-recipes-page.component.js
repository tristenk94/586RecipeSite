"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyRecipesPageComponent = void 0;
var core_1 = require("@angular/core");
var MyRecipesPageComponent = /** @class */ (function () {
    function MyRecipesPageComponent(recipesService) {
        this.recipesService = recipesService;
        this.recipes = [];
    }
    //load recipes for page
    MyRecipesPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipesService.getRecipesForUser()
            .subscribe(function (recipes) { return _this.recipes = recipes; });
    };
    MyRecipesPageComponent.prototype.onDeleteClicked = function (recipeId) {
        var _this = this;
        //alert(`Deleting your recipe with id ${recipeId}`)
        this.recipesService.deleteRecipe(recipeId)
            .subscribe(function () {
            _this.recipes = _this.recipes.filter(function (recipe) { return recipe.id !== recipeId; });
        });
    };
    MyRecipesPageComponent = __decorate([
        core_1.Component({
            selector: 'app-my-recipes-page',
            templateUrl: './my-recipes-page.component.html',
            styleUrls: ['./my-recipes-page.component.css']
        })
    ], MyRecipesPageComponent);
    return MyRecipesPageComponent;
}());
exports.MyRecipesPageComponent = MyRecipesPageComponent;
//# sourceMappingURL=my-recipes-page.component.js.map