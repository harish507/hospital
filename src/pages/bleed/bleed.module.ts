import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BleedPage } from './bleed';

@NgModule({
  declarations: [
    BleedPage,
  ],
  imports: [
    IonicPageModule.forChild(BleedPage),
  ],
})
export class BleedPageModule {}
