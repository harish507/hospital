import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeadachePage } from './headache';

@NgModule({
  declarations: [
    HeadachePage,
  ],
  imports: [
    IonicPageModule.forChild(HeadachePage),
  ],
})
export class HeadachePageModule {}
