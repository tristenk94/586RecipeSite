"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module"); //para mi projecto
var recipes_page_component_1 = require("./recipes-page/recipes-page.component");
var recipe_detail_page_component_1 = require("./recipe-detail-page/recipe-detail-page.component");
var new_recipe_page_component_1 = require("./new-recipe-page/new-recipe-page.component");
var edit_recipe_page_component_1 = require("./edit-recipe-page/edit-recipe-page.component");
var my_recipes_page_component_1 = require("./my-recipes-page/my-recipes-page.component");
var recipe_data_form_component_1 = require("./recipe-data-form/recipe-data-form.component");
var nav_bar_component_1 = require("./nav-bar/nav-bar.component");
//import { AuthModule } from '@auth0/auth0-angular'; //para auth
var callback_component_1 = require("./callback.component");
var protected_component_1 = require("./protected.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                recipes_page_component_1.RecipesPageComponent,
                recipe_detail_page_component_1.RecipeDetailPageComponent,
                new_recipe_page_component_1.NewRecipePageComponent,
                edit_recipe_page_component_1.EditRecipePageComponent,
                my_recipes_page_component_1.MyRecipesPageComponent,
                recipe_data_form_component_1.RecipeDataFormComponent,
                nav_bar_component_1.NavBarComponent,
                callback_component_1.CallbackComponent,
                protected_component_1.ProtectedComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map