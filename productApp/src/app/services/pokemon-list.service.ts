import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Pokemon } from '../pokemon/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  apiURL = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) { }
  /*========================================
  CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // HttpClient API get() method => Fetch pokemon list
  getPokemon(): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API get() method => Fetch pokemon
  getPokemonDetail(id): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
