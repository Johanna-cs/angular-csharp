import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-la-concession',
  templateUrl: './la-concession.component.html',
  styleUrls: ['./la-concession.component.css']
})
export class LaConcessionComponent  {

  public concessions: Concession[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Concession[]>(baseUrl + 'Concession').subscribe(result => {
      this.concessions = result;
      console.log(">>>>", this.concessions),
        console.log(">>>>", baseUrl)
    },
      error => console.error(error));

  }

}


interface Concession {
  brand: string;
  type: string;
  quantity: number; 
}
