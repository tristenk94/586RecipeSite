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
