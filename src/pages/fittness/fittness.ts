import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChestPage } from '../chest/chest';
import { AbsPage } from '../abs/abs';
import { ArmPage } from '../arm/arm';
import { ShoulderPage } from '../shoulder/shoulder';
import { LegPage } from '../leg/leg';
/**
 * Generated class for the FittnessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fittness',
  templateUrl: 'fittness.html',
})
export class FittnessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FittnessPage');
  }

  chest(){
    this.navCtrl.push(ChestPage);
  }
  
  abs(){
    this.navCtrl.push(AbsPage);
  }

  arm(){
    this.navCtrl.push(ArmPage);
  }

  shoulder(){
    this.navCtrl.push(ShoulderPage);
  }
  
  leg(){
    this.navCtrl.push(LegPage);
  }
}
