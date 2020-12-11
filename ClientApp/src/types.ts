export class Recipe { //defining recipe type
  id: string;
  name: string;
  Title: string;
  Rating: number;
  UploadDate: string;
  Ingredients: Ingredient[];
  Directions: Direction[];
  // PhotoFileName: string,
  // PhotoFilePath: string,
  userid: string;
}

export class Ingredient //defining ingredient type
{
  ingredientId: number;
  ingredientName: string;
  ingredientAmount: string;
  userid: string;
  recipeLink: string;
}


export class Direction //defining direction type
{
  directionId: number;
  stepNumber: number;
  step: string;
  userid: string;
  recipeLink: string;
}

export class ImageSnippet {

  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) { }
}

export class  RecipeIngDirVM {
  recipe: Recipe; //the recipe found

  ingredients: Ingredient[]; //the ingredients found for this recipe

  directions: Direction[]; //the directions found for this recipe

  public RecipeIngDirVM(r: Recipe, i: Ingredient[], d: Direction[]) {
    this.recipe = r;
    this.ingredients = i;
    this.directions = d;
  }

  }
