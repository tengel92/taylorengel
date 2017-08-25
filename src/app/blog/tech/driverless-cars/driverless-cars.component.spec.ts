import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverlessCarsComponent } from './driverless-cars.component';

describe('DriverlessCarsComponent', () => {
  let component: DriverlessCarsComponent;
  let fixture: ComponentFixture<DriverlessCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverlessCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverlessCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
