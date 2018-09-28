import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VitaminkPage } from './vitamink';

@NgModule({
  declarations: [
    VitaminkPage,
  ],
  imports: [
    IonicPageModule.forChild(VitaminkPage),
  ],
})
export class VitaminkPageModule {}
