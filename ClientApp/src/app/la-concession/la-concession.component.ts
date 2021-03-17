import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Concession } from '../IConcession';



@Component({
  selector: 'app-la-concession',
  templateUrl: './la-concession.component.html',
  styleUrls: ['./la-concession.component.css']
})
export class LaConcessionComponent implements OnInit {

  public concessions: Concession[];


  constructor( public restApi: ApiServiceService ) { }

  ngOnInit() {
    this.getConcessions()
    console.log(this.concessions)
  }

  // Get concessions list
  getConcessions() {
    this.restApi.getConcessions()
      .subscribe(concessions => {
        this.concessions = concessions;
      });
  }

  }
    // Post concessions list
 /* saveToApi(concessions) {
    this.restApi.saveToApi(this.concessions).subscribe((data: Concession[]) => 
      {
        this.concessions = data;
      })
  }*/


