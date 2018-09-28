import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeatPage } from './heat';

@NgModule({
  declarations: [
    HeatPage,
  ],
  imports: [
    IonicPageModule.forChild(HeatPage),
  ],
})
export class HeatPageModule {}
