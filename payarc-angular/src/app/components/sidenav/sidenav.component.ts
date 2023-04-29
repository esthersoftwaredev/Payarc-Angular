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
      icon: 'dashboard',
      text: 'Dashboard',
    },
    {
      routerLink: '/my-payarc',
      icon: 'linked',
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
      routerLink: '/p-circle',
      icon: 'p-circle',
      text: 'About Payarc',
    },
    {
      routerLink: '/contact',
      icon: 'p-training',
      text: 'Payarc Training',
    },
    {
      routerLink: '/training',
      icon: 'training',
      text: 'Industry Training',
    },
    {
      routerLink: '/contact',
      icon: 'marketing',
      text: 'Marketing Materials',
    },
    {
      routerLink: '/form',
      icon: 'form',
      text: 'Marketing Request Forms',
    },
    {
      routerLink: '/contact',
      icon: 'tools',
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
