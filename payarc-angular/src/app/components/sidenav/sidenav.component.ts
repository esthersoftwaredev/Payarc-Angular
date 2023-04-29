import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  opened = true;
  expanded = false;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidenav(): void {
    this.opened = !this.opened;
    this.sidenav.toggle();
  }

  toggleExpandSidenav(): void {
    this.expanded = !this.expanded;
  }
}
