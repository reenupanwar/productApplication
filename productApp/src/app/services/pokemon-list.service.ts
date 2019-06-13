import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Pokemon } from '../pokemon/pokemon';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

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

   // HttpClient API get() method => Fetch pokemon list
   getPokemonwithQuery(url): Observable<Pokemon> {
    return this.http.get<Pokemon>(url)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  
   // HttpClient API get() method => Fetch pokemon list
   getPokemonwithLimit(limit): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.apiURL +'?limit='+ limit)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API get() method => Fetch pokemon
  getPokemonDetail(name:string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.apiURL + name)
      .pipe( map((response: any) => {
        return response;
      }),
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

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
