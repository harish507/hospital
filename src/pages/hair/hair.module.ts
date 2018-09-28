import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HairPage } from './hair';

@NgModule({
  declarations: [
    HairPage,
  ],
  imports: [
    IonicPageModule.forChild(HairPage),
  ],
})
export class HairPageModule {}
