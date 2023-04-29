import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayarcTrainingComponent } from './payarc-training.component';

describe('PayarcTrainingComponent', () => {
  let component: PayarcTrainingComponent;
  let fixture: ComponentFixture<PayarcTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayarcTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayarcTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
