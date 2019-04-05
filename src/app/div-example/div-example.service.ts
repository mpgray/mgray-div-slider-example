import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://api.shmoozed.com/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()

export class RESTService {

  constructor(private http: HttpClient) {
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  updateExampleItem(people): Observable<any> {
    return this.http.put(endpoint + 'example/item' + '/' + 90, JSON.stringify(people), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${90}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }

  getExampleItem(): Observable<any> {
    return this.http.get(endpoint + 'example/item' + '/' + 90).pipe(
      map(this.extractData));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
