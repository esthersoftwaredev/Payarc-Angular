import { Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
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
