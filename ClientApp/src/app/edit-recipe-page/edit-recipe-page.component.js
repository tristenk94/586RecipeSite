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
var EditRecipePageComponent = /** @class */ (function () {
    function EditRecipePageComponent(route, router, recipeService, ingredientsService, directionsService) {
        this.route = route;
        this.router = router;
        this.recipeService = recipeService;
        this.ingredientsService = ingredientsService;
        this.directionsService = directionsService;
    }
    EditRecipePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.recipeService.getViewModeledRecipes(id)
            .subscribe(function (VM) {
            _this.recipe = VM[0].recipe;
            _this.recipe.Ingredients = VM[0].ingredients;
            //console.log(this.recipe.Ingredients);
            _this.recipe.Directions = VM[0].directions;
            //console.log(VM[0].directions);
            // console.log(this.recipe.Ingredients);
        });
        //console.log("edit called ngongit");
        // console.log(this.recipe.id, this.recipe.name, this.recipe.Title, this.recipe.Rating, this.recipe.UploadDate);
        //console.log(this.recipe.Ingredients);
    };
    EditRecipePageComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var name = _a.name, Title = _a.Title, Rating = _a.Rating, UploadDate = _a.UploadDate, userid = _a.userid, Ingredients = _a.Ingredients, Directions = _a.Directions;
        //console.log("onsubmit called ");
        this.recipe.name = name;
        this.recipe.Title = Title;
        this.recipe.Rating = Rating;
        this.recipe.UploadDate = UploadDate;
        this.recipe.userid = userid;
        this.recipe.Directions = Directions;
        this.recipe.Ingredients = Ingredients;
        this.recipeService.saveRecipe(this.recipe)
            .subscribe(function () {
            _this.recipe.Ingredients.forEach(function (ing) {
                ing.recipeLink = _this.recipe.id;
            });
            _this.recipe.Directions.forEach(function (dir) {
                dir.recipeLink = _this.recipe.id;
            });
            _this.router.navigateByUrl('/my-recipes');
        });
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
//# sourceMappingURL=edit-recipe-page.component.js.map