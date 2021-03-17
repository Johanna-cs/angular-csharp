import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Concession } from './IConcession';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';



@Injectable({
  providedIn: 'root',
})


export class MyService {

  // Define API
  apiURL = 'https://localhost:44343';


  constructor(public http: HttpClient) { }

  // HttpClient API get() 
  getConcessions(): Observable<Concession[]> {
    return this.http.get<Concession[]>(this.apiURL + '/Concession')
      
  } catch(error) {
    console.log(error)
  }
   

 // HttpClient API post() 
  saveToApi(concessions) {
    this.http
      .post(this.apiURL + '/Concession', JSON.stringify(concessions))
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
