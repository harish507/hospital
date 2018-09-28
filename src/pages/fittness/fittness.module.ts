import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FittnessPage } from './fittness';

@NgModule({
  declarations: [
    FittnessPage,
  ],
  imports: [
    IonicPageModule.forChild(FittnessPage),
  ],
})
export class FittnessPageModule {}
