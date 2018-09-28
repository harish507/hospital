import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShockPage } from './shock';

@NgModule({
  declarations: [
    ShockPage,
  ],
  imports: [
    IonicPageModule.forChild(ShockPage),
  ],
})
export class ShockPageModule {}
