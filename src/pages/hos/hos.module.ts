import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HosPage } from './hos';

@NgModule({
  declarations: [
    HosPage,
  ],
  imports: [
    IonicPageModule.forChild(HosPage),
  ],
})
export class HosPageModule {}
