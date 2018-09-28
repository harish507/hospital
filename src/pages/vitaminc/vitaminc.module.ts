import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VitamincPage } from './vitaminc';

@NgModule({
  declarations: [
    VitamincPage,
  ],
  imports: [
    IonicPageModule.forChild(VitamincPage),
  ],
})
export class VitamincPageModule {}
