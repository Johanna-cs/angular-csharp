import { ViewEncapsulation } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { CircularGaugeComponent } from '@syncfusion/ej2-angular-circulargauge';
import { TextBox } from '@syncfusion/ej2-angular-inputs'

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class CounterComponent {
  public counterTitle = "";
  public currentCount = 0;
  public rangeValue: number = 0;

  constructor() { }
    ngOnInit() {
      this.counterTitle = "Counter";
    };

  public setTitle() {
    this.counterTitle ;
  }

  public incrementCounter() {
    this.currentCount++;
  }

  public setRangeValue() {
    this.rangeValue+=10;
  }
  

}
