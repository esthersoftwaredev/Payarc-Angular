import { Component,Input, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-payarc-training-stepper',
  templateUrl: './payarc-training-stepper.component.html',
  styleUrls: ['./payarc-training-stepper.component.scss']
})
export class PayarcTrainingStepperComponent {

  @ViewChild('stepper', { static: false }) stepper!: MatStepper;
  @Input() activeStep!: number;

  ngOnChanges() {
    if (this.stepper) {
      this.stepper.selectedIndex = this.activeStep;
    }
  }
}
