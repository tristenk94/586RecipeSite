"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DirectionsService = /** @class */ (function () {
    function DirectionsService(
    //provide http service
    http) {
        this.http = http;
        this.API = 'https://localhost:44334/api';
        this.DIRECTIONS_API = this.API + "/directions";
    }
    DirectionsService.prototype.getDirectionForId = function (id) {
        //console.log("id called");
        return this.http.get(this.DIRECTIONS_API + "/" + id);
    };
    DirectionsService.prototype.deleteDirection = function (id) {
        return this.http.delete(this.DIRECTIONS_API + "/" + id.toString());
    };
    DirectionsService.prototype.saveDirection = function (direction) {
        var result; //is Direction valid
        if (direction.directionId) {
            result = this.http.put(this.DIRECTIONS_API + "/" + direction.directionId, direction);
        }
        else { //if not create new one
            result = this.http.post(this.DIRECTIONS_API, direction);
        }
        return result;
    };
    DirectionsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DirectionsService);
    return DirectionsService;
}());
exports.default = DirectionsService;
//# sourceMappingURL=directions.service.js.map