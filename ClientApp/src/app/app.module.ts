import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component'; //para idk scaffolding generated
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { AppRoutingModule } from './app-routing.module'; //para mi projecto
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { RecipeDetailPageComponent } from './recipe-detail-page/recipe-detail-page.component';
import { MyFavRecipesPageComponent } from './my-fav-recipes-page/my-fav-recipes-page.component';
import { NewRecipePageComponent } from './new-recipe-page/new-recipe-page.component';
import { EditRecipePageComponent } from './edit-recipe-page/edit-recipe-page.component';
import { MyRecipesPageComponent } from './my-recipes-page/my-recipes-page.component';
import { RecipeDataFormComponent } from './recipe-data-form/recipe-data-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { AuthModule } from '@auth0/auth0-angular'; //para auth
import { LogoutHandlerComponent } from './logout-handler/logout-handler.component';
import { LoginHandlerComponent } from './login-handler/login-handler.component';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    RecipesPageComponent,
    RecipeDetailPageComponent,
    MyFavRecipesPageComponent,
    NewRecipePageComponent,
    EditRecipePageComponent,
    MyRecipesPageComponent,
    RecipeDataFormComponent,
    NavBarComponent,
    LogoutHandlerComponent,
    LoginHandlerComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-3xx3rb0y.us.auth0.com',
      clientId: '9fAZ99uPhBDXUiqWD2sPoPQWvBgK7Gik',
    }),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    /*RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
