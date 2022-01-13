import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MenuComponent } from './menu.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  exports: [MenuComponent],
  declarations: [MenuComponent],
  providers: [],
})
export class MenuModule {}
