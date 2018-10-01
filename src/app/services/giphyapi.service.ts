import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { DataResponse, Datum } from '../models/data-response.model';
import { environment } from '../../environments/environment';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GiphyapiService {
  private api = 'https://api.giphy.com/v1/gifs';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private setParams(): HttpParams {
    let params = new HttpParams();
    params = params.append('api_key', environment.API_KEY);
    params = params.append('limit', '25');
    params = params.append('rating', 'G');

    return params;
  }

  getTrending(offset: number): Observable<DataResponse<Datum[]>> {
    const params = this.setParams().append('offset', offset.toString());
    return this.http
      .get<DataResponse<Datum[]>>(this.api + '/trending', { params: params })
      .pipe(catchError(this.handleError<DataResponse<Datum[]>>('getTrending')));
  }

  getByid(id: string): Observable<DataResponse<Datum>> {
    return this.http
      .get<DataResponse<Datum>>(this.api + '/' + id, {
        params: this.setParams()
      })
      .pipe(catchError(this.handleError<DataResponse<Datum>>('getByid')));
  }

  search(text: string) {
    const params = this.setParams().append('q', text);
    return this.http
      .get<DataResponse<Datum[]>>(this.api + '/search', { params: params })
      .pipe(catchError(this.handleError<DataResponse<Datum[]>>('search')));
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
    this.messageService.add(`GiphyapiService: ${message}`);
  }
}
