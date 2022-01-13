import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MenuModule } from '../menu/menu.module';
import { AlbumCardComponent } from '../detailView/component/albumCard/albumCard.component';
import { ArtistCardComponent } from './component/artistCard/artistCard.component';
import { DetailViewComponent } from '../detailView/component/detailView/detailView.component';
import { MainViewComponent } from './component/mainView/mainView.component';
import { TrackCardComponent } from '../detailView/component/trackCard/trackCard.component';
import { MainViewRoutingModule } from './mainView.routing';

@NgModule({
  imports: [MenuModule, MainViewRoutingModule, IonicModule, CommonModule],
  exports: [],
  declarations: [MainViewComponent, ArtistCardComponent],
  providers: [],
})
export class MainViewModule {}
