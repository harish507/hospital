import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VitaminsPage } from '../vitamins/vitamins';
import { FirstaidPage } from '../firstaid/firstaid';
import { HealthtipsPage } from '../healthtips/healthtips';
import { HomeremediesPage } from '../homeremedies/homeremedies';
import { HosPage } from '../hos/hos';
import { DrugsPage } from '../drugs/drugs';
import { ChatPage } from '../chat/chat';

/**
 * Generated class for the HealthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-health',
  templateUrl: 'health.html',
})
export class HealthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthPage');
  }
  vitamins(){
    this.navCtrl.push(VitaminsPage);
  }
  
  firstaid(){
    this.navCtrl.push(FirstaidPage);
  }
  healthtips(){
    this.navCtrl.push(HealthtipsPage);
  }

  homeremedies(){
    this.navCtrl.push(HomeremediesPage);
  }

  drugs(){
    this.navCtrl.push(DrugsPage);
  }

  hos(){
    this.navCtrl.push(HosPage);
  }

  docs(){
    this.navCtrl.push(ChatPage);

  }
}
