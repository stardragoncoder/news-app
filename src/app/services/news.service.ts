
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { News } from '../model/news';

@Injectable({
  providedIn: "root"
})
export class NewsService {
  key = "c11648e3f626421f879b86dee27ed792";
  everythingEP = "http://newsapi.org/v2/everything?q=";
  topHLEP = "http://newsapi.org/v2/top-headlines?country=in";
  searchTerm = "apple";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<News> {
    return this.http
      .get<News>(this.everythingEP + this.searchTerm + "&apiKey=" + this.key)
      .pipe(
        tap(_ => console.log("fetched news")),
        catchError(this.handleError<News>("getNews"))
      );
  }

  getAllSearch(searchTerm: string): Observable<News> {
    return this.http
      .get<News>(this.everythingEP + searchTerm + "&apiKey=" + this.key)
      .pipe(
        tap(_ => console.log("fetched news for " + searchTerm)),
        catchError(this.handleError<News>("getNews for " + searchTerm))
      );
  }

  getTopHL(): Observable<News> {
    return this.http.get<News>(this.topHLEP + "&apiKey=" + this.key).pipe(
      tap(_ => console.log("fetched Headlines")),
      catchError(this.handleError<News>("Headlines "))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
