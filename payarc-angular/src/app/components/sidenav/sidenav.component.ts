import { Component } from '@angular/core';
import { NavigationItem } from 'src/app/models/navigation-item';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  opened = true;
  expanded = false;

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
          submenu: [
            {
              routerLink: '/subsubmenu1',
              icon: 'check',
              text: 'Subsubmenu Item 1',
            },
            {
              routerLink: '/subsubmenu2',
              icon: 'check',
              text: 'Subsubmenu Item 2',
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


  toggleExpandSidenav(): void {
    this.expanded = !this.expanded;
    if (!this.expanded) {
      this.closeAllSubmenus(this.navigationItems);
    }
  }

  closeAllSubmenus(items: NavigationItem[]): void {
    items.forEach(item => {
      if (item.submenu) {
        item.showSubmenu = false;
        this.closeAllSubmenus(item.submenu);
      }
    });
  }

}
