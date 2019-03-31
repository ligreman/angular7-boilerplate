import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { User } from '../interfaces/user';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private urlApi = 'http://5ca09a691afd060014668843.mockapi.io/api/';

    constructor(private http: HttpClient) {

    }

    // Puedo gestionar el propio error en la definición del api
    getUsers(): Observable<User[]> {
        const endpoint = this.urlApi + 'users';
        // const endpointError = 'http://www.mocky.io/v2/5ca0a3d03300006d00a87e50';

        return this.http.get<User[]>(endpoint)
            .pipe(
                // Le paso al log
                tap(_ => this.log('fetched users')),
                // Handle error
                catchError(this.handleError<User[]>('getUsers', []))
            );
    }

    // Puedo delegar la gestión del error a quien hace uso de la llamada
    getUsersWithoutHandlingError(): Observable<User[]> {
        const endpointError = 'http://www.mocky.io/v2/5ca0a3d03300006d00a87e50';

        return this.http.get<User[]>(endpointError)
            .pipe(
                tap(_ => this.log('fetched users'))
            );
    }

    // Una tercera forma de gestionar los errores a más alto nivel es usar un interceptor

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

    /**
     * Log a HeroService message with the MessageService
     * @param message Mensaje a loguear
     */
    private log(message: string) {
        console.log(`ApiService: ${message}`);
    }
}
