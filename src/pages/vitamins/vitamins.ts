import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VitaminaPage } from '../vitamina/vitamina';
import { VitaminbPage } from '../vitaminb/vitaminb';
import { VitamincPage } from '../vitaminc/vitaminc';

import { VitamindPage } from '../vitamind/vitamind';
import { VitaminePage } from '../vitamine/vitamine';
import { VitaminkPage } from '../vitamink/vitamink';



/**
 * Generated class for the VitaminsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vitamins',
  templateUrl: 'vitamins.html',
})
export class VitaminsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VitaminsPage');
  }
  vitamina(){
    this.navCtrl.push(VitaminaPage);
  }
  vitaminb(){
    this.navCtrl.push(VitaminbPage);
  }
  vitaminc(){
    this.navCtrl.push(VitamincPage);
  }
  vitamind(){
    this.navCtrl.push(VitamindPage);
  }

  vitamine(){
    this.navCtrl.push(VitaminePage);
  }

  vitamink(){
    this.navCtrl.push(VitaminkPage);
  }

}
