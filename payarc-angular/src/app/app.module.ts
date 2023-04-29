import { NgModule } from "@angular/core";
import { BrowserModule, DomSanitizer } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { HomeComponent } from "./components/home/home.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";

@NgModule({
	declarations: [AppComponent, HomeComponent, SidenavComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
    HttpClientModule,
		MatSidenavModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatListModule,
		MatCardModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor(
		private matIconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer
	) {
		this.matIconRegistry.addSvgIcon(
			"dashboard",
			this.domSanitizer.bypassSecurityTrustResourceUrl(
				"assets/icons/dashboard.svg"
			)
		);
		this.matIconRegistry.addSvgIcon(
			"form",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/form.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"linked",
			this.domSanitizer.bypassSecurityTrustResourceUrl(
				"assets/icons/linked.svg"
			)
		);
		this.matIconRegistry.addSvgIcon(
			"marketing",
			this.domSanitizer.bypassSecurityTrustResourceUrl(
				"assets/icons/marketing.svg"
			)
		);
		this.matIconRegistry.addSvgIcon(
			"training",
			this.domSanitizer.bypassSecurityTrustResourceUrl(
				"assets/icons/training.svg"
			)
		);
		this.matIconRegistry.addSvgIcon(
			"p-training",
			this.domSanitizer.bypassSecurityTrustResourceUrl(
				"assets/icons/p-training.svg"
			)
		);
		this.matIconRegistry.addSvgIcon(
			"p-circle",
			this.domSanitizer.bypassSecurityTrustResourceUrl(
				"assets/icons/p-circle.svg"
			)
		);
		this.matIconRegistry.addSvgIcon(
			"search",
			this.domSanitizer.bypassSecurityTrustResourceUrl(
				"assets/icons/search.svg"
			)
		);
		this.matIconRegistry.addSvgIcon(
			"tools",
			this.domSanitizer.bypassSecurityTrustResourceUrl(
				"assets/icons/tools.svg"
			)
		);
	}
}
