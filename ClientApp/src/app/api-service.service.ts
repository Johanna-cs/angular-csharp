import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Concession } from './IConcession';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  // Define API
  apiURL = 'https://localhost:44343';

  constructor(public http: HttpClient) { }

  // HttpClient API get() 
  getConcessions(): Observable<Concession[]> {
    return this.http.get<Concession[]>(this.apiURL + '/Concession')

  } catch(error) {
    console.log(error)
  }

}
