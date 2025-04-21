import { Component, HostListener, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NavigationItem } from "src/app/models/navigation-item";

@Component({
	selector: "app-sidenav",
	templateUrl: "./sidenav.component.html",
	styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
	opened = true;
	expanded = true;

	@HostListener("window:resize", ["$event"])
	onResize(event: { target: { innerWidth: number } }) {
		this.expanded = event.target.innerWidth >= 992;
	}

	navigationItems: NavigationItem[] = [];

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.fetchNavigationItems();
    this.checkWindowSize();
	}

  checkWindowSize(): void {
    this.expanded = window.innerWidth >= 992;
  }

	fetchNavigationItems(): void {
		this.http
			.get<NavigationItem[]>("assets/navigation-items.json")
			.subscribe((data) => {
				this.navigationItems = data;
			});
	}

	expandSidenav(): void {
		this.expanded = true;
	}

	collapseSidenav(): void {
		this.expanded = false;
		this.collapseAllSubmenus(this.navigationItems);
	}

	collapseAllSubmenus(items: NavigationItem[]): void {
		items.forEach((item) => {
			if (item.submenu) {
				item.showSubmenu = false;
				this.collapseAllSubmenus(item.submenu);
			}
		});
	}
}
