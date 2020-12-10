"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var IngredientsService = /** @class */ (function () {
    function IngredientsService(
    //provide http service
    http) {
        this.http = http;
        this.API = 'https://localhost:44334/api';
        this.INGREDIENTS_API = this.API + "/ingredients";
    }
    IngredientsService.prototype.getIngredientsForId = function (id) {
        //console.log("id called");
        return this.http.get(this.INGREDIENTS_API + "/" + id);
    };
    IngredientsService.prototype.deleteIngredient = function (id) {
        return this.http.delete(this.INGREDIENTS_API + "/" + id.toString());
    };
    IngredientsService.prototype.saveIngredient = function (ingredient) {
        var result; //is ingredeint valid
        if (ingredient.ingredientId) {
            result = this.http.put(this.INGREDIENTS_API + "/" + ingredient.ingredientId, ingredient);
        }
        else { //if not create new one
            result = this.http.post(this.INGREDIENTS_API, ingredient);
        }
        return result;
    };
    IngredientsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], IngredientsService);
    return IngredientsService;
}());
exports.default = IngredientsService;
//# sourceMappingURL=ingredients.service.js.map