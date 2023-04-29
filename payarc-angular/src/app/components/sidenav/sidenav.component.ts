import { Component } from '@angular/core';
import { NavigationItem } from 'src/app/models/navigation-item';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  opened = true;
  expanded = true;

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
      additionalIcon: 'keyboard_arrow_down',
      submenu: [
        {
          routerLink: '',
          text: 'Overview',
        },
        {
          routerLink: '/apply-app',
          text: 'Apply App',
          additionalIcon: 'keyboard_arrow_down',
          submenu: [
            {
              routerLink: '/applications',
              text: 'Applications',
            },
            {
              routerLink: '/pricing-templates',
              text: 'Pricing Templates',
            },
            {
              routerLink: '/reports',
              text: 'Reports',
            },
            {
              routerLink: '/user-maintenance',
              text: 'User Maintenance',
            },
            {
              routerLink: '/settings',
              text: 'Settings',
            },
          ],
        },
        {
          routerLink: '/my-residuals',
          text: 'My Residuals',
        },
        {
          routerLink: '/my-merchants',
          text: 'My Merchants',
          additionalIcon: 'keyboard_arrow_down',
          submenu: [
            {
              routerLink: '/live-merchants',
              text: 'Live Merchants',
            },
            {
              routerLink: '/deposits-batch-report',
              text: 'Deposits Batch & Report',
            },
            {
              routerLink: '/chargebacks',
              text: 'Chargebacks',
            },
            {
              routerLink: '/ach Returns',
              text: 'ACH Returns',
            },
          ],
        },
        {
          routerLink: '/resources',
          text: 'Resources',
          additionalIcon: 'keyboard_arrow_down',
          submenu: [
            {
              routerLink: '/resources',
              text: 'Resources',
            },
            {
              routerLink: '/api-keys',
              text: 'API Keys',
            },
          ],
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


  expandSidenav(): void {
    this.expanded = true;
  }

  collapseSidenav(): void {
    this.expanded = false;
    this.collapseAllSubmenus(this.navigationItems);

  }

  collapseAllSubmenus(items: NavigationItem[]): void {
    items.forEach(item => {
      if (item.submenu) {
        item.showSubmenu = false;
        this.collapseAllSubmenus(item.submenu);
      }
    });
  }
}
