import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Recipe, Ingredient, Direction } from '../types';
import RecipesService from '../recipes.service';
//import { IngredientsService } from '../ingredients.service';
//import { Title } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-recipe-page',
  templateUrl: './edit-recipe-page.component.html',
  styleUrls: ['./edit-recipe-page.component.css']
})
export class EditRecipePageComponent implements OnInit {
  recipe: Recipe;
  ingredients: Ingredient[]
  directions: Direction[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipesService,
   // private ingredientsService: IngredientsService,
  ) { }

  ngOnInit(): void { //get the recipe
    const id = this.route.snapshot.paramMap.get('id');
    this.recipeService.getViewModeledRecipes(id)
      .subscribe(VM => {
       this.recipe = VM[0].recipe;
        console.log(this.recipe);
      });

    // .subscribe(response => {
    //   this.recipe = response;
    //   console.log(this.recipe);
    //   this.recipe.Ingredients = this.recipe.ingresults.results;
    //   this.recipe = this.recipe[2];
    // });

    console.log("edit called ngongit");
   // console.log(this.recipe.id, this.recipe.name, this.recipe.Title, this.recipe.Rating, this.recipe.UploadDate);
    //console.log(this.recipe.Ingredients);
  }

  onSubmit({ name, Title, Rating, UploadDate, Ingredients, Directions, userid }): void { //update the recipe
    console.log("onsubmit called ");
    let ret = new Recipe();
    ret.name = name;
    ret.Title = Title;
    ret.Rating = Rating;
    ret.UploadDate = UploadDate;
    ret.Ingredients = Ingredients;
    ret.Directions = Directions;
    ret.userid = userid;
    

    this.recipeService.saveRecipe(ret)
      .subscribe(() => {
        this.router.navigateByUrl('/my-recipes');
      });
    //alert('Saving changes to the recipe...');
    //console.log(this.recipe.id, name, Title, Rating, UploadDate);

   /* this.recipeService.editRecipe(this.recipe.id, name, Title, Rating, UploadDate, Ingredients)
      .subscribe(() => {
        //this.recipeId = this.recipe.id;
        //console.log("taken: "+this.recipeId);
        //this.recipe.Ingredients = Ingredients;
        this.router.navigateByUrl('/my-recipes');
      });*/

    //  Ingredients.forEach(ingred => {
    //   console.log(ingred.ing+ " AND "+ ingred.amt);
    //   this.ingredientsService.hybridIngredient(this.recipeId, ingred.ing, ingred.amt).subscribe();
    //  });
  }


  // ingOnSubmit({Ingredients}): void {
  //   console.log("ing on submit id is: " + this.recipeId);

  //   Ingredients.forEach(ingred => {
  //     console.log(ingred.ing+ " AND "+ ingred.amt);
  //     this.ingredientsService.createIngredient(this.recipeId, ingred.ing, ingred.amt).subscribe();
  //    });

  //    console.log("created all ingredients");
  // }
}


/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Recipe, Ingredient, Direction } from '../types';
import { fakeRecipes } from '../fake-data';

@Component({
  selector: 'app-edit-recipe-page',
  templateUrl: './edit-recipe-page.component.html',
  styleUrls: ['./edit-recipe-page.component.css']
})
export class EditRecipePageComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipe = fakeRecipes.find(recipe => recipe.id === id );
  }

  onSubmit(): void {
    alert('Saving changes to the recipe...');
    this.router.navigateByUrl('/my-recipes');
  }
}*/
