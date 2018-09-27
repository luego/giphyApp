import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { DataResponse } from '../models/data-response.model';

@Injectable({
  providedIn: 'root'
})
export class GiphyapiService {
  private api = 'http://api.giphy.com/v1/gifs/';

  constructor(private http: HttpClient) {}

  getTrending(): Observable<DataResponse> {
    return this.http.get<DataResponse>(this.api + '/trending').pipe(
      map(data => data),
      catchError(this.handleError<DataResponse>('getHeroes'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`HeroService: ${message}`);
    console.error(message);
  }
}
