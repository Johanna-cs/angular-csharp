import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaConcessionComponent } from './la-concession.component';

describe('LaConcessionComponent', () => {
  let component: LaConcessionComponent;
  let fixture: ComponentFixture<LaConcessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaConcessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaConcessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
