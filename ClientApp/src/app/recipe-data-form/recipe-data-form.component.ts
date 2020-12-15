import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { IngredientsService } from '../ingredients.service';
import { DirectionsService } from '../directions.service';
import { Recipe, Ingredient, Direction, RecipeIngDirVM } from '../types';
import { v4 as uuid } from 'uuid';
import { OktaAuthService } from '../app.service';



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
  Ingredients: Ingredient[] = new Array<Ingredient>();
  Directions: Direction[] = new Array<Direction>();

  name: string = '';
  id: string = '';
  Title: string = '';
  Rating: number = 0;
  UploadDate: string = '';

  //oktaUserId: string;

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
    //public oktaAuth: OktaAuthService,
    ) { }

  ngOnInit(): void {
    //console.log(this.currentName + " " + this.currentTitle + " " + this.currentRating + " " + this.currentUploadDate);
    if (this.currentId != null) {
      this.id = this.currentId; //save this for when we link recipeid
    }
    this.name = this.currentName;
    this.Title = this.currentTitle;
    this.Rating = this.currentRating;
    this.UploadDate = this.currentUploadDate;

    //this.oktaUserId = sessionStorage.getItem('userName');
    //this.oktaUserId = this.oktaAuth.userName; //get username 
     //console.log("user id: " + this.oktaUserId);


    //console.log("Current : ");
    //console.log(this.currentIngredients);
    //console.log(this.currentDirections);
    if (this.currentIngredients == null) {
      this.Ingredients = new Array<Ingredient>();
    }
    else {
      this.Ingredients = this.currentIngredients;
    }

    if (this.currentDirections == null) {
      this.Directions = new Array<Direction>();
    }
    else {
      this.Directions = this.currentDirections;
    }
  }



  onSubmitButtonClick(): void {

    /*console.log("new ingred" + this.ingredients);
    this.ingredients.forEach(ingred => {
      console.log("found" + ingred.ingredientName + "and " + ingred.ingredientAmount);
    });

    console.log("new direct" + this.directions);
    this.directions.forEach(direct => {
      console.log("found" + direct.stepNumber + "and " + direct.step);
    });*/


    this.onSubmit.emit({
      id: null, //not emtting
      name: this.name,
      Title: this.Title,
      Rating: this.Rating,
      UploadDate: this.UploadDate,
      Ingredients: this.Ingredients,
      Directions: this.Directions,
      userid: "1",//this.oktaUserId, 
    });


  }

  addIngInput() { //for this call service to post new ing


    let sendIng = new Ingredient();
    sendIng.ingredientName = this.newIngIng;
    sendIng.ingredientAmount = this.newIngAmt;
    sendIng.userid = "1",//this.oktaUserId;
    sendIng.recipeLink = this.id;

    this.ingredientsService.saveIngredient(sendIng)
      .subscribe(result => {
        this.Ingredients.push(result); //save the stored ingredient
      });


    this.newIngIng = ''; //clear
    this.newIngAmt = '';

  }

  addDirInput() {
    let sendDir = new Direction();
    sendDir.step = this.newDirDir;
    sendDir.stepNumber = this.newDirNum;
    sendDir.userid = "1";//this.oktaUserId;
    sendDir.recipeLink = this.id;

    this.directionsService.saveDirection(sendDir)
      .subscribe(result => {
        this.Directions.push(result); //save the stored direction
      });

    this.newDirDir = ''; //clear
    this.newDirNum = 0;
  }

  deleteIngInput(index) { //on this, delete the ing
    //console.log(this.ingredients[index].ingredientId);
    this.ingredientsService.deleteIngredient(this.Ingredients[index].ingredientId)
      .subscribe();
    this.Ingredients.splice(index, 1);
  }

  deleteDirInput(index) {
   // console.log(this.directions[index].directionId);
    this.directionsService.deleteDirection(this.Directions[index].directionId)
      .subscribe();
    this.Directions.splice(index, 1);
  }

  getDate() {
    this.UploadDate = new Date().toDateString();
   // console.log("get date called");
  }


}
