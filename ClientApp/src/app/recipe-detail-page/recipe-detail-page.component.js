"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeDetailPageComponent = void 0;
var core_1 = require("@angular/core");
var RecipeDetailPageComponent = /** @class */ (function () {
    function RecipeDetailPageComponent(route, recipesService) {
        this.route = route;
        this.recipesService = recipesService;
        this.isLoading = true; //bool to control display if an object is loading
    }
    RecipeDetailPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log("entered detail");
        var id = this.route.snapshot.paramMap.get('id');
        this.recipesService.getViewModeledRecipes(id)
            .subscribe(function (VM) {
            //this.recipe = new Recipe();
            _this.recipe = VM[0].recipe;
            //this.recipe.ingredients = VM[1];
            _this.recipe.Ingredients = VM[0].ingredients;
            // this.Ingredients = VM[0].Ingredients;
            //console.log("Ingreds");
            // console.log(this.recipe.Ingredients);
            // console.log(this.Ingredients);
            _this.recipe.Directions = VM[0].directions;
            //  this.Directions = VM[0].Directions;
            // console.log(this.recipe.Ingredients);
            _this.isLoading = false;
        });
    };
    RecipeDetailPageComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-detail-page',
            templateUrl: './recipe-detail-page.component.html',
            styleUrls: ['./recipe-detail-page.component.css']
        })
    ], RecipeDetailPageComponent);
    return RecipeDetailPageComponent;
}());
exports.RecipeDetailPageComponent = RecipeDetailPageComponent;
//# sourceMappingURL=recipe-detail-page.component.js.map