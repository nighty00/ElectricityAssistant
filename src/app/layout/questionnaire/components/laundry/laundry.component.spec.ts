import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaundryComponent } from './laundry.component';

describe('LaundryComponent', () => {
  let component: LaundryComponent;
  let fixture: ComponentFixture<LaundryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaundryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaundryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
