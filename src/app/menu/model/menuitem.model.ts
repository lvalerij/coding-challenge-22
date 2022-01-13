export class MenuItem {
  routerLink: string;
  label: string;
  icon: string;

  constructor(routerLink: string, label: string, icon: string) {
    this.routerLink = routerLink;
    this.label = label;
    this.icon = icon;
  }
}
