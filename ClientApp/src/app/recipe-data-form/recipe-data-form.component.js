"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeDataFormComponent = void 0;
var core_1 = require("@angular/core");
var types_1 = require("../types");
var RecipeDataFormComponent = /** @class */ (function () {
    function RecipeDataFormComponent(route, router, recipesService, ingredientsService, directionsService) {
        this.route = route;
        this.router = router;
        this.recipesService = recipesService;
        this.ingredientsService = ingredientsService;
        this.directionsService = directionsService;
        this.currentId = null;
        this.currentName = '';
        this.currentTitle = '';
        this.currentRating = 0;
        this.currentUploadDate = '';
        this.currentIngredients = [];
        this.currentDirections = [];
        this.onSubmit = new core_1.EventEmitter();
        this.recipe = null;
        this.ingredients = new Array();
        this.directions = new Array();
        this.name = '';
        this.id = '';
        this.title = '';
        this.rating = 0;
        this.uploadDate = '';
        this.newIngIng = ''; //a new ingredient ingredient name holder
        this.newIngAmt = ''; // a new ingredient amount holder
        this.newDirNum = 0; //a new direction number holder
        this.newDirDir = ''; //a new direction step
    }
    RecipeDataFormComponent.prototype.ngOnInit = function () {
        //console.log(this.currentName + " " + this.currentTitle + " " + this.currentRating + " " + this.currentUploadDate);
        if (this.currentId != null) {
            this.id = this.currentId; //save this for when we link recipeid
        }
        this.name = this.currentName;
        this.title = this.currentTitle;
        this.rating = this.currentRating;
        this.uploadDate = this.currentUploadDate;
        console.log("Current : ");
        console.log(this.currentIngredients);
        console.log(this.currentDirections);
        if (this.currentIngredients == null) {
            this.ingredients = new Array();
        }
        else {
            this.ingredients = this.currentIngredients;
        }
        if (this.currentDirections == null) {
            this.directions = new Array();
        }
        else {
            this.directions = this.currentDirections;
        }
    };
    RecipeDataFormComponent.prototype.onSubmitButtonClick = function () {
        console.log("new ingred" + this.ingredients);
        this.ingredients.forEach(function (ingred) {
            console.log("found" + ingred.ingredientName + "and " + ingred.ingredientAmount);
        });
        console.log("new direct" + this.directions);
        this.directions.forEach(function (direct) {
            console.log("found" + direct.stepNumber + "and " + direct.step);
        });
        this.onSubmit.emit({
            id: null,
            name: this.name,
            Title: this.title,
            Rating: this.rating,
            UploadDate: this.uploadDate,
            Ingredients: this.ingredients,
            Directions: this.directions,
            userid: "1",
        });
    };
    RecipeDataFormComponent.prototype.addIngInput = function () {
        var _this = this;
        var sendIng = new types_1.Ingredient();
        sendIng.ingredientName = this.newIngIng;
        sendIng.ingredientAmount = this.newIngAmt;
        sendIng.userid = "1"; //revist with auth?
        sendIng.recipeLink = this.id;
        this.ingredientsService.saveIngredient(sendIng)
            .subscribe(function (result) {
            _this.ingredients.push(result); //save the stored ingredient
        });
        this.newIngIng = ''; //clear
        this.newIngAmt = '';
    };
    RecipeDataFormComponent.prototype.addDirInput = function () {
        var _this = this;
        var sendDir = new types_1.Direction();
        sendDir.step = this.newDirDir;
        sendDir.stepNumber = this.newDirNum;
        sendDir.userid = "1"; //revist with auth?
        sendDir.recipeLink = this.id;
        this.directionsService.saveDirection(sendDir)
            .subscribe(function (result) {
            _this.directions.push(result); //save the stored direction
        });
        this.newDirDir = ''; //clear
        this.newDirNum = 0;
    };
    RecipeDataFormComponent.prototype.deleteIngInput = function (index) {
        console.log(this.ingredients[index].ingredientId);
        this.ingredientsService.deleteIngredient(this.ingredients[index].ingredientId)
            .subscribe();
        this.ingredients.splice(index, 1);
    };
    RecipeDataFormComponent.prototype.deleteDirInput = function (index) {
        console.log(this.directions[index].directionId);
        this.directionsService.deleteDirection(this.directions[index].directionId)
            .subscribe();
        this.directions.splice(index, 1);
    };
    RecipeDataFormComponent.prototype.getDate = function () {
        this.uploadDate = new Date().toDateString();
        console.log("get date called");
    };
    __decorate([
        core_1.Input()
    ], RecipeDataFormComponent.prototype, "buttonText", void 0);
    __decorate([
        core_1.Input()
    ], RecipeDataFormComponent.prototype, "currentId", void 0);
    __decorate([
        core_1.Input()
    ], RecipeDataFormComponent.prototype, "currentName", void 0);
    __decorate([
        core_1.Input()
    ], RecipeDataFormComponent.prototype, "currentTitle", void 0);
    __decorate([
        core_1.Input()
    ], RecipeDataFormComponent.prototype, "currentRating", void 0);
    __decorate([
        core_1.Input()
    ], RecipeDataFormComponent.prototype, "currentUploadDate", void 0);
    __decorate([
        core_1.Input()
    ], RecipeDataFormComponent.prototype, "currentIngredients", void 0);
    __decorate([
        core_1.Input()
    ], RecipeDataFormComponent.prototype, "currentDirections", void 0);
    __decorate([
        core_1.Output()
    ], RecipeDataFormComponent.prototype, "onSubmit", void 0);
    RecipeDataFormComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-data-form',
            templateUrl: './recipe-data-form.component.html',
            styleUrls: ['./recipe-data-form.component.css']
        })
    ], RecipeDataFormComponent);
    return RecipeDataFormComponent;
}());
exports.RecipeDataFormComponent = RecipeDataFormComponent;
//# sourceMappingURL=recipe-data-form.component.js.map