export interface NavigationItem {
  routerLink: string;
  icon: string;
  text: string;
  additionalIcon?: string;
  submenu?: NavigationItem[];
  showSubmenu?: boolean;
}
