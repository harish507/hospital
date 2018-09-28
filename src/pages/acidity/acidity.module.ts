import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcidityPage } from './acidity';

@NgModule({
  declarations: [
    AcidityPage,
  ],
  imports: [
    IonicPageModule.forChild(AcidityPage),
  ],
})
export class AcidityPageModule {}
