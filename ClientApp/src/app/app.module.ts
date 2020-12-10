import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { AppRoutingModule } from './app-routing.module';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { RecipeDetailPageComponent } from './recipe-detail-page/recipe-detail-page.component';
import { MyFavRecipesPageComponent } from './my-fav-recipes-page/my-fav-recipes-page.component';
import { NewRecipePageComponent } from './new-recipe-page/new-recipe-page.component';
import { EditRecipePageComponent } from './edit-recipe-page/edit-recipe-page.component';
import { MyRecipesPageComponent } from './my-recipes-page/my-recipes-page.component';
import { RecipeDataFormComponent } from './recipe-data-form/recipe-data-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



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
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
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
