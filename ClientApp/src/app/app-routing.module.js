"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var recipes_page_component_1 = require("./recipes-page/recipes-page.component");
var recipe_detail_page_component_1 = require("./recipe-detail-page/recipe-detail-page.component");
var edit_recipe_page_component_1 = require("./edit-recipe-page/edit-recipe-page.component");
var new_recipe_page_component_1 = require("./new-recipe-page/new-recipe-page.component");
var my_recipes_page_component_1 = require("./my-recipes-page/my-recipes-page.component");
var app_guard_1 = require("./app.guard");
var callback_component_1 = require("./callback.component");
var protected_component_1 = require("./protected.component");
var routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: recipes_page_component_1.RecipesPageComponent, pathMatch: 'full' },
    { path: 'recipes/:id', component: recipe_detail_page_component_1.RecipeDetailPageComponent },
    { path: 'edit-recipe/:id', component: edit_recipe_page_component_1.EditRecipePageComponent, canActivate: [app_guard_1.OktaAuthGuard] },
    { path: 'new-recipe', component: new_recipe_page_component_1.NewRecipePageComponent, canActivate: [app_guard_1.OktaAuthGuard] },
    { path: 'my-recipes', component: my_recipes_page_component_1.MyRecipesPageComponent, canActivate: [app_guard_1.OktaAuthGuard] },
    {
        path: 'callback',
        component: callback_component_1.CallbackComponent
    },
    {
        path: 'protected',
        component: protected_component_1.ProtectedComponent,
        canActivate: [app_guard_1.OktaAuthGuard]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map