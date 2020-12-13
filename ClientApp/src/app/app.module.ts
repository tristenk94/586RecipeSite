import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module'; //para mi projecto
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { RecipeDetailPageComponent } from './recipe-detail-page/recipe-detail-page.component';
import { NewRecipePageComponent } from './new-recipe-page/new-recipe-page.component';
import { EditRecipePageComponent } from './edit-recipe-page/edit-recipe-page.component';
import { MyRecipesPageComponent } from './my-recipes-page/my-recipes-page.component';
import { RecipeDataFormComponent } from './recipe-data-form/recipe-data-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

//import { AuthModule } from '@auth0/auth0-angular'; //para auth

import { CallbackComponent } from './callback.component';
import { ProtectedComponent } from './protected.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipesPageComponent,
    RecipeDetailPageComponent,
    NewRecipePageComponent,
    EditRecipePageComponent,
    MyRecipesPageComponent,
    RecipeDataFormComponent,
    NavBarComponent,
    CallbackComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    // Import the module into the application, with configuration
   /* AuthModule.forRoot({
      domain: 'dev-3xx3rb0y.us.auth0.com',
      clientId: '9fAZ99uPhBDXUiqWD2sPoPQWvBgK7Gik',
    }),*/
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
