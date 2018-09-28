import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VitamindPage } from './vitamind';

@NgModule({
  declarations: [
    VitamindPage,
  ],
  imports: [
    IonicPageModule.forChild(VitamindPage),
  ],
})
export class VitamindPageModule {}
