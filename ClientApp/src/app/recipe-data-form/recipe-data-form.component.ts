import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import RecipesService from '../recipes.service';
import IngredientsService from '../ingredients.service';
import DirectionsService from '../directions.service';
import { Recipe, Ingredient, Direction, RecipeIngDirVM } from '../types';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-recipe-data-form',
  templateUrl: './recipe-data-form.component.html',
  styleUrls: ['./recipe-data-form.component.css']
})


export class RecipeDataFormComponent implements OnInit {

  @Input() buttonText;

  @Input() currentId = null;
  @Input() currentName = '';
  @Input() currentTitle = '';
  @Input() currentRating = 0;
  @Input() currentUploadDate = '';
  @Input() currentIngredients = [];
  @Input() currentDirections = [];

  @Output() onSubmit = new EventEmitter<Recipe>();
  
  recipe: Recipe = null;
  ingredients: Ingredient[] = new Array<Ingredient>();
  directions: Direction[] = new Array<Direction>();

  name: string = '';
  id: string = '';
  title: string = '';
  rating: number = 0;
  uploadDate: string = '';

  newIngIng: string = ''; //a new ingredient ingredient name holder
  newIngAmt: string = ''; // a new ingredient amount holder

  newDirNum: number = 0; //a new direction number holder
  newDirDir: string = ''; //a new direction step

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipesService: RecipesService,
    private ingredientsService: IngredientsService,
    private directionsService: DirectionsService,

  ) { }

  ngOnInit(): void {
    //console.log(this.currentName + " " + this.currentTitle + " " + this.currentRating + " " + this.currentUploadDate);
    if (this.currentId != null) {
      this.id = this.currentId; //save this for when we link recipeid
    }
    this.name = this.currentName;
    this.title = this.currentTitle;
    this.rating = this.currentRating;
    this.uploadDate = this.currentUploadDate;

    console.log("Current : ");
    console.log(this.currentIngredients);
    console.log(this.currentDirections);
    if (this.currentIngredients == null) {
      this.ingredients = new Array<Ingredient>();
    }
    else {
      this.ingredients = this.currentIngredients;
    }

    if (this.currentDirections == null) {
      this.directions = new Array<Direction>();
    }
    else {
      this.directions = this.currentDirections;
    }
  }



  onSubmitButtonClick(): void {

    /*this.ingredients.forEach(ingred => {
      console.log("found" + ingred.ingredientName + "and " + ingred.ingredientAmount);
    });*/

    

    //if (this.ingredients[this.ingredients.length].ingredientName == null || this.ingredients[this.ingredients.length].ingredientAmount == null) {
      //console.log("removing tail end: " + this.ingredients[this.ingredients.length-1]);
     // this.ingredients.pop();
    //}

    //if (this.directions[this.directions.length].step == null || this.directions[this.directions.length].stepNumber == null) {
      //console.log("removing tail end: " + this.directions[this.directions.length - 1]);
     // this.directions.pop();
   // }

    console.log("new ingred" + this.ingredients);
    this.ingredients.forEach(ingred => {
      console.log("found" + ingred.ingredientName + "and " + ingred.ingredientAmount);
    });

    console.log("new direct" + this.directions);
    this.directions.forEach(direct => {
      console.log("found" + direct.stepNumber + "and " + direct.step);
    });


    this.onSubmit.emit({
      id: null, //not emtting
      name: this.name,
      Title: this.title,
      Rating: this.rating,
      UploadDate: this.uploadDate,
      Ingredients: this.ingredients,
      Directions: this.directions,
      userid: "1", //revisit with auth
    });


  }

  addIngInput() { //for this call service to post new ing
   /* console.log("Before: ");
    this.ingredients.forEach(ingred => {
      console.log("found" + ingred.ingredientName + "and " + ingred.ingredientAmount);
    });*/

    let sendIng = new Ingredient();
    sendIng.ingredientName = this.newIngIng;
    sendIng.ingredientAmount = this.newIngAmt;
    sendIng.userid = "1"; //revist with auth?
    sendIng.recipeLink = this.id;

    this.ingredientsService.saveIngredient(sendIng)
      .subscribe(result => {
        this.ingredients.push(result); //save the stored ingredient
      })
        

    this.newIngIng = ''; //clear
    this.newIngAmt = '';

   /* console.log("After: ");
    this.ingredients.forEach(ingred => {
      console.log("found" + ingred.ingredientName + "and " + ingred.ingredientAmount);
    });*/
  }

  addDirInput() {
    let sendDir = new Direction();
    sendDir.step = this.newDirDir;
    sendDir.stepNumber = this.newDirNum;
    sendDir.userid = "1"; //revist with auth?
    sendDir.recipeLink = this.id;

    this.directionsService.saveDirection(sendDir)
      .subscribe(result => {
        this.directions.push(result); //save the stored direction
      })

    this.newDirDir = ''; //clear
    this.newDirNum = 0;
  }

  deleteIngInput(index) { //on this, delete the ing
    console.log(this.ingredients[index].ingredientId);
   this.ingredientsService.deleteIngredient(this.ingredients[index].ingredientId)
      .subscribe();
    this.ingredients.splice(index, 1);
  }

  deleteDirInput(index) {
    console.log(this.directions[index].directionId);
    this.directionsService.deleteDirection(this.directions[index].directionId)
      .subscribe();
    this.directions.splice(index, 1);
  }

  getDate() {
    this.uploadDate = new Date().toDateString();
    console.log("get date called");
  }


}

/*import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import RecipesService from '../recipes.service';
import { Recipe, Ingredient, Direction, RecipeIngDirVM } from '../types';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-recipe-data-form',
  templateUrl: './recipe-data-form.component.html',
  styleUrls: ['./recipe-data-form.component.css']
})


export class RecipeDataFormComponent implements OnInit {
  //recipe: Recipe = new Recipe();

  subScribe: Subscription;

  @Input() buttonText;

  @Input() currentName = '';
  @Input() currentTitle = '';
  @Input() currentRating = 0;
  @Input() currentUploadDate = '';
  @Input() currentIngredients = [];
  @Input() currentDirections = [];
  @Input() currentFileName = '';
  @Input() currentPhotoFilePath = '';

  @Input() currentRecipe: null;
  @Input() currentIngredientsList: null;
  @Input() currentDirectionsList: null;


  //@Output() onSubmitRecipe = new EventEmitter<Recipe>();
  //@Output() onSubmitIngredients = new EventEmitter<Ingredient>();
  //@Output() onSubmitDirections = new EventEmitter<Direction>();



  recipe: Recipe = null;
  ingredients: Ingredient[] = new Array<Ingredient>();
  directions: Direction[] = new Array<Direction>();



  name: string = '';
  id: string = '';
  Title: string = '';
  Rating: number = 0;
  UploadDate: string = '';
 // Ingredients: Array<Ingredient> = new Array<Ingredient>();

  newIng: any = {};
  //Directions: Array<Direction> = new Array<Direction>();
  newDir: any = {};



  testIng: Ingredient[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipesService: RecipesService,

  ) { }

  ngOnInit(): void {

    this.recipe = this.currentRecipe;
    this.ingredients = this.currentIngredientsList;
    this.directions = this.currentDirectionsList;
  
    console.log("initialized name " + this.name + " " + this.currentName);
    console.log("initialized ing " + this.ingredients + "/"+ this.currentIngredients +"/");
  }



  onSubmitButtonClick(): void {
    //alert('Yummy, creating a new recipe...');
    //this.router.navigateByUrl('/my-recipes');
    console.log("ing button click submit :" + this.ingredients);
    console.log("dir button click submit :" + this.directions);

    for (var i = 0; i < this.newIng.length; i++) //save vals
    {
      this.ingredients[i] = this.newIng[i];
      console.log(this.ingredients[i] + " is now " + this.newIng[i]);

    }

    for (var i = 0; i < this.newDir.length; i++) //save vals
    {
      this.directions[i] = this.newDir[i];
      console.log(this.directions[i] + " is now " + this.newDir[i]);

    }

    this.onSubmitRecipe.emit({
      id: null,
      name: this.recipe.name,
      Title: this.recipe.Title,
      UploadDate: this.recipe.UploadDate,
      Rating: this.recipe.Rating,
      userid: "1", //revisit with auth here
      Ingredients: this.ingredients,
      Directions: this.directions,
    });

    this.ingredients.forEach(ingred => {
      this.onSubmitIngredients.emit({
        ing: ingred.ing,
        amt: ingred.amt,
        userid: ingred.userid,
      });
    });

    this.directions.forEach(direct => {
      this.onSubmitDirections.emit({
        dir: direct.dir,
        step: direct.step,
        userid: direct.userid,
      });
    });
  
  }

  addIngInput() {
    this.ingredients.push(this.newIng);
    this.newIng = {};
  }

  addDirInput() {
    this.directions.push(this.newDir);
    this.newDir = {};
  }

  deleteIngInput(index) {
    this.ingredients.splice(index, 1);
  }

  deleteDirInput(index) {
    this.directions.splice(index, 1);
  }

  getDate() {
    this.UploadDate = new Date().toDateString();
    console.log("get date called");
  }


}*/



/*try again with: https://developer.okta.com/blog/2018/07/27/build-crud-app-in-aspnet-framework-webapi-and-angular
 * Replace the code in sugarlevel-edit.component.ts with:
 * 
 * import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe, Ingredient, Direction } from '../types';
//import { IngredientsService } from '../ingredients.service';
//import { IngredientDataFormComponent } from './ingredient-data-form/ingredient-data-form.component';

@Component({
  selector: 'app-recipe-data-form',
  templateUrl: './recipe-data-form.component.html',
  styleUrls: ['./recipe-data-form.component.css']
})


export class RecipeDataFormComponent implements OnInit {

  @Input() buttonText;

  @Input() currentName = '';
  @Input() currentTitle = '';
  @Input() currentRating = 0;
  @Input() currentUploadDate = '';
  @Input() currentIngredients = [];//new Array<Ingredient>();  
  //Input() currentIngredIng = [];
  //@Input() currentIngredAmt = [];

  @Input() currentDirections = [];
  @Input() currentFileName = '';
  @Input() currentPhotoFilePath = '';

  @Output() onSubmit = new EventEmitter<Recipe>();
  // @Output() ingOnSubmit = new EventEmitter<Ingredient>();

  name: string = '';
  id: string = '';
  Title: string = '';
  Rating: number = 0;
  UploadDate: string = '';
  Ingredients: Array<Ingredient> = new Array<Ingredient>();
  //IngredientListHolder: Ingredient[];
  newIng: any = {};
  Directions: Array<Direction> = new Array<Direction>();
  newDir: any = {};

  // PhotoFileName: string;
  // PhotoFilePath: string;


  constructor(
    private router: Router,
    //private ingredientsService: IngredientsService,
  ) { }

  ngOnInit(): void {
    this.name = this.currentName;
    this.Title = this.currentTitle;
    this.Rating = this.currentRating;
    this.UploadDate = this.currentUploadDate;
    //this.Ingredients = this.ingredientsService.getIngredientsByRecipeId(this.id);
    //this.Ingredients = new Ingredient();
    // this.Ingredients = this.currentIngredients;//new Array<Ingredient>({"joe", 4});

    // this.currentIngredients.forEach(ing => {
    this.Ingredients = this.currentIngredients;
    // });
    this.Directions = this.currentDirections;
    // this.PhotoFileName = this.currentFileName;
    // this.PhotoFilePath = this.currentPhotoFilePath;

    console.log("initialized name " + this.name + " " + this.currentName);
    console.log("initialized ing " + this.Ingredients + "/");//+ this.currentIngredients +"/");
  }



  onSubmitButtonClick(): void {
    //alert('Yummy, creating a new recipe...');
    //this.router.navigateByUrl('/my-recipes');
    console.log("ing button click submit :" + this.Ingredients);//+ " "+ this.currentIngredients);
    console.log("dir button click submit :" + this.Directions);

    for(var i = 0; i < this.newIng.length; i++) //save vals
    {
      this.Ingredients[i] = this.newIng[i];
      console.log(this.Ingredients[i] + " is now " + this.newIng[i]);

    }

    for (var i = 0; i < this.newDir.length; i++) //save vals
    {
      this.Directions[i] = this.newDir[i];
      console.log(this.Directions[i] + " is now " + this.newDir[i]);

    }


  
    this.onSubmit.emit({
      name: this.name,
      id: "aaaaa",
      Title: this.Title,
      Rating: Number(this.Rating),
      UploadDate: this.UploadDate,
      Ingredients: this.Ingredients,
      Directions: this.Directions,
      //views: 0,
     // favs: 0,

      // PhotoFileName: this.PhotoFileName,
      // PhotoFilePath: this.PhotoFilePath,
      //1:27:47
    });

    //this.onSubIng.emit()
    console.log("form name " + this.name);// + " " + this.currentName);
    console.log("form ing " + this.Ingredients + " ");//+ this.currentIngredients);

  }

  addIngInput() {
    this.Ingredients.push(this.newIng);
    this.newIng = {};
  }

  addDirInput() {
    this.Directions.push(this.newDir);
    this.newDir = {};
  }

  deleteIngInput(index) {
    this.Ingredients.splice(index, 1);
  }

  deleteDirInput(index) {
    this.Directions.splice(index, 1);
  }

  getDate() {
    this.UploadDate = new Date().toDateString();
  }


}*/

/*import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe, Ingredient, Direction } from '../types';

@Component({
  selector: 'app-recipe-data-form',
  templateUrl: './recipe-data-form.component.html',
  styleUrls: ['./recipe-data-form.component.css']
})
export class RecipeDataFormComponent implements OnInit {

  @Input() buttonText;

  @Input() currentName = '';
  @Input() currentTitle = '';
  @Input() currentRating = 0;
  @Input() currentUploadDate = '';
  @Input() currentIngredients = [];
  @Input() currentDirections = [];
  @Input() currentFileName = '';
  @Input() currentPhotoFilePath = '';

  @Output() onSubmit = new EventEmitter<Recipe>();

  name: string = '';
  id: string = '';
  Title: string = '';
	Rating: number = 0;
	UploadDate: string = '';
  Ingredients: Array<Ingredient> = [];  
  newIng: any = {};
  Directions: Array<Direction> = [];
  newDir: any = {};

  // PhotoFileName: string;
  // PhotoFilePath: string;


  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.name = this.currentName;
    this.Title = this.currentTitle;
    this.Rating = this.currentRating;
    this.UploadDate = this.currentUploadDate;
    this.Ingredients = this.currentIngredients;
    this.Directions = this.currentDirections;
    // this.PhotoFileName = this.currentFileName;
    // this.PhotoFilePath = this.currentPhotoFilePath;
  }

  onSubmitButtonClick(): void {
    //alert('Yummy, creating a new recipe...');
    //this.router.navigateByUrl('/my-recipes');
    this.onSubmit.emit({
      name: this.name,
      id: null,
      Title: this.Title,
      Rating: Number(this.Rating),
      UploadDate: this.UploadDate,
      Ingredients: this.Ingredients,
      Directions: this.Directions,
      // PhotoFileName: this.PhotoFileName,
      // PhotoFilePath: this.PhotoFilePath,
      //1:27:47
    })
  }

  addIngInput()
  {
    this.Ingredients.push(this.newIng);
    this.newIng = {};
  }

  addDirInput()
  {
    this.Directions.push(this.newDir);
    this.newDir = {};
  }

  deleteIngInput(index)
  {
    this.Ingredients.splice(index, 1);
  }

  deleteDirInput(index)
  {
    this.Directions.splice(index, 1);
  }



  getDate()
  {
    this.UploadDate = new Date().toDateString(); 
  }


 } */
