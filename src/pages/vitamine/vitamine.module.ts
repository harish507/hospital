import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VitaminePage } from './vitamine';

@NgModule({
  declarations: [
    VitaminePage,
  ],
  imports: [
    IonicPageModule.forChild(VitaminePage),
  ],
})
export class VitaminePageModule {}
