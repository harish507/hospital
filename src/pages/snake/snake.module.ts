import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SnakePage } from './snake';

@NgModule({
  declarations: [
    SnakePage,
  ],
  imports: [
    IonicPageModule.forChild(SnakePage),
  ],
})
export class SnakePageModule {}
