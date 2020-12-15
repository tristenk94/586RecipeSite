import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { Recipe, Ingredient, Direction, RecipeIngDirVM } from './types';

@Injectable({
  providedIn: 'root'
})
export class DirectionsService {

  public API = '';
  public DIRECTIONS_API = '';

 /* public API = 'https://localhost:44334/api';
  public DIRECTIONS_API = `${this.API}/directions`;*/

  base: string = "";
  http: HttpClient;

  constructor(
    //provide http service
    http: HttpClient,
    @Inject(`BASE_URL`) baseURL: string

  ) {
    this.API = `${baseURL}api`;
    this.DIRECTIONS_API = `${this.API}/directions`;
    this.http = http;
  }

  /*constructor(
    //provide http service
    private http: HttpClient,
  ) { }*/

  getDirectionForId(id: string): Observable<Direction[]> {
    //console.log("id called");
    return this.http.get<Direction[]>(`${this.DIRECTIONS_API}/${id}`);
  }

  deleteDirection(id: string) {
    return this.http.delete(`${this.DIRECTIONS_API}/${id.toString()}`);
  }

  saveDirection(direction: Direction): Observable<Direction> {
    let result: Observable<Direction>; //is Direction valid
    if (direction.directionId) {
      result = this.http.put<Direction>(
        `${this.DIRECTIONS_API}/${direction.directionId}`,
        direction);

    } else { //if not create new one
      result = this.http.post<Direction>(this.DIRECTIONS_API, direction);
    }
    return result;
  }

}
