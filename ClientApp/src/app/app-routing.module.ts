import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesPageComponent } from './recipes-page/recipes-page.component'
import { RecipeDetailPageComponent } from './recipe-detail-page/recipe-detail-page.component';
import { EditRecipePageComponent } from './edit-recipe-page/edit-recipe-page.component';
import { MyFavRecipesPageComponent } from './my-fav-recipes-page/my-fav-recipes-page.component';
import { NewRecipePageComponent } from './new-recipe-page/new-recipe-page.component';
import { MyRecipesPageComponent } from './my-recipes-page/my-recipes-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesPageComponent, pathMatch: 'full' },
  { path: 'recipes/:id', component: RecipeDetailPageComponent },
  { path: 'edit-recipe/:id', component: EditRecipePageComponent },
  { path: 'my-fav-recipes', component: MyFavRecipesPageComponent },
  { path: 'new-recipe', component: NewRecipePageComponent },
  { path: 'my-recipes', component: MyRecipesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
