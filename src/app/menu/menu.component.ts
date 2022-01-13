import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { LastfmAPIService } from '../shared/services/lastfmAPI.service';
import { MenuItem } from './model/menuitem.model';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
})
export class MenuComponent implements OnInit {
  menu: MenuItem[];

  constructor(
    private menuController: MenuController,
    public lastfmAPIService: LastfmAPIService
  ) {
    this.menu = this.getMenuItems();
  }

  ngOnInit() {}

  onOpenMenu(): void {
    this.menuController.open();
  }

  private getMenuItems(): MenuItem[] {
    const menu = environment.menu;
    const menuItems = Object.keys(menu).map((key: string) => {
      const menuItem = menu[key];
      return menuItem;
    });
    return menuItems;
  }
}
