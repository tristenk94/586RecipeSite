"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageSnippet = exports.RecipeIngDirVM = exports.Direction = exports.Ingredient = exports.Recipe = void 0;
var Recipe = /** @class */ (function () {
    function Recipe() {
    }
    return Recipe;
}());
exports.Recipe = Recipe;
var Ingredient //defining ingredient type
 = /** @class */ (function () {
    function Ingredient() {
    }
    return Ingredient;
}());
exports.Ingredient = Ingredient;
var Direction //defining direction type
 = /** @class */ (function () {
    function Direction() {
    }
    return Direction;
}());
exports.Direction = Direction;
var RecipeIngDirVM = /** @class */ (function () {
    function RecipeIngDirVM() {
    }
    RecipeIngDirVM.prototype.RecipeIngDirVM = function (r, i, d) {
        this.recipe = r;
        this.ingredients = i;
        this.directions = d;
    };
    return RecipeIngDirVM;
}());
exports.RecipeIngDirVM = RecipeIngDirVM;
var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
        this.status = 'init';
    }
    return ImageSnippet;
}());
exports.ImageSnippet = ImageSnippet;
//# sourceMappingURL=types.js.map