import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MenuModule } from '../menu/menu.module';
import { AlbumCardComponent } from './component/albumCard/albumCard.component';
import { DetailViewComponent } from './component/detailView/detailView.component';
import { TrackCardComponent } from './component/trackCard/trackCard.component';
import { DetailViewRoutingModule } from './detailView.routing';

@NgModule({
  imports: [MenuModule, DetailViewRoutingModule, IonicModule, CommonModule],
  exports: [],
  declarations: [DetailViewComponent, AlbumCardComponent, TrackCardComponent],
  providers: [],
})
export class DetailViewModule {}
