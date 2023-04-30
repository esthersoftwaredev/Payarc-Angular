import { Component } from '@angular/core';

@Component({
  selector: 'app-payarc-training',
  templateUrl: './payarc-training.component.html',
  styleUrls: ['./payarc-training.component.scss']
})
export class PayarcTrainingComponent {
  isPanelOpen: { [index: number]: boolean } = {};

  onPanelOpen(panelIndex: number): void {
    this.isPanelOpen[panelIndex] = true;
  }

  onPanelClose(panelIndex: number): void {
    this.isPanelOpen[panelIndex] = false;
  }
}
