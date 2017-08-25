import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBucketComponent } from './the-bucket.component';

describe('TheBucketComponent', () => {
  let component: TheBucketComponent;
  let fixture: ComponentFixture<TheBucketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBucketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
