import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcidityPage } from '../acidity/acidity';
import { CcPage } from '../cc/cc';
import { HeadachePage } from '../headache/headache';
import { BackpainPage } from '../backpain/backpain';
import { PimplesPage } from '../pimples/pimples';
import { WeightPage } from '../weight/weight';
import { DandruffPage } from '../dandruff/dandruff';
import { HairPage } from '../hair/hair';
import { AsthamaPage } from '../asthama/asthama';

/**
 * Generated class for the HomeremediesPage page.
 *
 * See https://ionicframework.c
 * om/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homeremedies',
  templateUrl: 'homeremedies.html',
})
export class HomeremediesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeremediesPage');
  }
  acidity(){
    this.navCtrl.push(AcidityPage);
  }
cc(){
    this.navCtrl.push(CcPage);
  }
  headache(){
    this.navCtrl.push(HeadachePage);
  }
  backpain(){
    this.navCtrl.push(BackpainPage);
  }
  pimples(){
    this.navCtrl.push(PimplesPage);
  }
  weight(){
    this.navCtrl.push(WeightPage);
  }
  dandruff(){
    this.navCtrl.push(DandruffPage);
  }
  hair(){
    this.navCtrl.push(HairPage);
  }
  asthama(){
    this.navCtrl.push(AsthamaPage);
  }

}
