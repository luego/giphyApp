import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { DataResponse } from '../models/data-response.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyapiService {
  private api = 'https://api.giphy.com/v1/gifs';

  private httpOptions = {};
  constructor(private http: HttpClient) {
    let params = new HttpParams();
    params = params.append('api_key', environment.API_KEY);
    params = params.append('limit', '25');
    params = params.append('rating', 'G');

    this.httpOptions = {
      params: params
    };
  }

  getTrending(): Observable<DataResponse> {
    return this.http
      .get<DataResponse>(this.api + '/trending', this.httpOptions)
      .pipe(catchError(this.handleError<DataResponse>('getTrending')));
  }

  getByid(id: string) {
    return this.http
      .get<DataResponse>(this.api + '/' + id, this.httpOptions)
      .pipe(catchError(this.handleError<DataResponse>('getByid')));
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

  /** Log a message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`GiphyapiService: ${message}`);
    console.error(message);
  }
}
