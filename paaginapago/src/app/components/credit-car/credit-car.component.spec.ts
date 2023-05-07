import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCarComponent } from './credit-car.component';

describe('CreditCarComponent', () => {
  let component: CreditCarComponent;
  let fixture: ComponentFixture<CreditCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
