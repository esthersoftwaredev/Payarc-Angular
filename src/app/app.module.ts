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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';


import { OverviewComponent } from "./components/overview/overview.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { ClockComponent } from './components/clock/clock.component';
import { PayarcTrainingComponent } from './components/payarc-training/payarc-training.component';
import { PayarcTrainingStepperComponent } from './components/payarc-training-stepper/payarc-training-stepper.component';

@NgModule({
	declarations: [AppComponent, OverviewComponent, SidenavComponent, ClockComponent, PayarcTrainingComponent, PayarcTrainingStepperComponent],
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
    MatExpansionModule,
    MatStepperModule,
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
			"p-training-large",
			this.domSanitizer.bypassSecurityTrustResourceUrl(
				"assets/icons/p-training-large.svg"
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
		this.matIconRegistry.addSvgIcon(
			"profile-mine",
			this.domSanitizer.bypassSecurityTrustResourceUrl(
				"assets/icons/profile-mine.svg"
			)
		);
		this.matIconRegistry.addSvgIcon(
			"circle",
			this.domSanitizer.bypassSecurityTrustResourceUrl(
				"assets/icons/circle.svg"
			)
		);
	}
}
