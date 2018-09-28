import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VitaminsPage } from './vitamins';

@NgModule({
  declarations: [
    VitaminsPage,
  ],
  imports: [
    IonicPageModule.forChild(VitaminsPage),
  ],
})
export class VitaminsPageModule {}
