import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PimplesPage } from './pimples';

@NgModule({
  declarations: [
    PimplesPage,
  ],
  imports: [
    IonicPageModule.forChild(PimplesPage),
  ],
})
export class PimplesPageModule {}
