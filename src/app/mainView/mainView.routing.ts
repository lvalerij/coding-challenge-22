import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainViewComponent } from './component/mainView/mainView.component';
import { DetailViewComponent } from '../detailView/component/detailView/detailView.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainViewRoutingModule {}
