import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesPageComponent } from './recipes-page/recipes-page.component'
import { RecipeDetailPageComponent } from './recipe-detail-page/recipe-detail-page.component';
import { EditRecipePageComponent } from './edit-recipe-page/edit-recipe-page.component';
import { NewRecipePageComponent } from './new-recipe-page/new-recipe-page.component';
import { MyRecipesPageComponent } from './my-recipes-page/my-recipes-page.component';

import { OktaAuthGuard } from './app.guard';
import { CallbackComponent } from './callback.component';
import { ProtectedComponent } from './protected.component';


const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesPageComponent, pathMatch: 'full' },
  { path: 'recipes/:id', component: RecipeDetailPageComponent },
  { path: 'edit-recipe/:id', component: EditRecipePageComponent, canActivate: [OktaAuthGuard] },
  { path: 'new-recipe', component: NewRecipePageComponent, canActivate: [OktaAuthGuard] },
  { path: 'my-recipes', component: MyRecipesPageComponent, canActivate: [OktaAuthGuard] },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [OktaAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
