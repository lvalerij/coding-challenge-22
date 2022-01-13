import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DetailViewComponent } from './component/detailView/detailView.component';

const routes: Routes = [
  {
    path: 'detailView/:id',
    component: DetailViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailViewRoutingModule {}
