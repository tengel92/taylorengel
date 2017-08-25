import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPresentFutureComponent } from './past-present-future.component';

describe('PastPresentFutureComponent', () => {
  let component: PastPresentFutureComponent;
  let fixture: ComponentFixture<PastPresentFutureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastPresentFutureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastPresentFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
