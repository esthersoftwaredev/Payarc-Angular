import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationItem } from 'src/app/models/navigation-item';

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


  navigationItems: NavigationItem[] = [
    {
      routerLink: '/',
      icon: 'home',
      text: 'Dashboard',
    },
    {
      routerLink: '/about',
      icon: 'info',
      text: 'My Payarc',
      additionalIcon: 'mail',
      submenu: [
        {
          routerLink: '/submenu1',
          icon: 'star',
          text: 'Submenu Item 1',
        },
        {
          routerLink: '/submenu2',
          icon: 'star',
          text: 'Submenu Item 2',
          additionalIcon: 'mail',
        },
      ],
    },
    {
      routerLink: '/contact',
      icon: 'mail',
      text: 'About Payarc',
    },
    {
      routerLink: '/contact',
      icon: 'mail',
      text: 'Payarc Training',
    },
    {
      routerLink: '/contact',
      icon: 'mail',
      text: 'Industry Training',
    },
    {
      routerLink: '/contact',
      icon: 'mail',
      text: 'Marketing Materials',
    },
    {
      routerLink: '/contact',
      icon: 'mail',
      text: 'Marketing Request Forms',
    },
    {
      routerLink: '/contact',
      icon: 'mail',
      text: 'Access to tools',
    },
  ];

}
