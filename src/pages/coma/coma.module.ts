import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComaPage } from './coma';

@NgModule({
  declarations: [
    ComaPage,
  ],
  imports: [
    IonicPageModule.forChild(ComaPage),
  ],
})
export class ComaPageModule {}
