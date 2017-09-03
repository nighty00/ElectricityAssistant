import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolingComponent } from './cooling.component';

describe('CoolingHeatingComponent', () => {
  let component: CoolingComponent;
  let fixture: ComponentFixture<CoolingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
