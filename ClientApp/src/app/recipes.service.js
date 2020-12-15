"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesService = void 0;
var core_1 = require("@angular/core");
require("rxjs/add/observable/of");
var RecipesService = /** @class */ (function () {
    function RecipesService(
    //provide http service
    http, baseURL) {
        this.API = '';
        this.RECIPES_API = '';
        /* public API = 'https://localhost:44334/api';
         public RECIPES_API = `${this.API}/recipes`;*/
        this.base = "";
        this.API = baseURL + "api";
        this.RECIPES_API = this.API + "/recipes";
        this.http = http;
    }
    /* constructor(
      //provide http service
      private http: HttpClient,
    ) { } */
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
        return this.http.get('/api/users/1');
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
        }),
        __param(1, core_1.Inject("BASE_URL"))
    ], RecipesService);
    return RecipesService;
}());
exports.RecipesService = RecipesService;
//# sourceMappingURL=recipes.service.js.map