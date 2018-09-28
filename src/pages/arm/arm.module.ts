import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArmPage } from './arm';

@NgModule({
  declarations: [
    ArmPage,
  ],
  imports: [
    IonicPageModule.forChild(ArmPage),
  ],
})
export class ArmPageModule {}
