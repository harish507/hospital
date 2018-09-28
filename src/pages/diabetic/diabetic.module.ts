import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiabeticPage } from './diabetic';

@NgModule({
  declarations: [
    DiabeticPage,
  ],
  imports: [
    IonicPageModule.forChild(DiabeticPage),
  ],
})
export class DiabeticPageModule {}
