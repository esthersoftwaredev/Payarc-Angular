import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayarcTrainingStepperComponent } from './payarc-training-stepper.component';

describe('PayarcTrainingStepperComponent', () => {
  let component: PayarcTrainingStepperComponent;
  let fixture: ComponentFixture<PayarcTrainingStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayarcTrainingStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayarcTrainingStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
