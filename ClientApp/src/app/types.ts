export class Recipe { //defining recipe type
  id: string;
  name: string;
  Title: string;
  Rating: number;
  UploadDate: string;
  Ingredients: Ingredient[];
  Directions: Direction[];
  userid: string;
  // PhotoFileName: string,
  // PhotoFilePath: string,
}

export class Ingredient //defining ingredient type
{
  ingredientId: string;
  ingredientName: string;
  ingredientAmount: string;
  userid: string;
}

export class Direction //defining direction type
{
  directionId: string;
  stepNumber: number;
  step: string;
  userid: string;
}

export class RecipeIngDirVM {
  recipe: Recipe;
  ingredients: Ingredient[];
  directions: Direction[];

  public RecipeIngDirVM(r: Recipe, i: Ingredient[], d: Direction[]) {
    this.recipe = r;
    this.ingredients = i;
    this.directions = d;
  }
}

export class ImageSnippet {

  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) { }
}
