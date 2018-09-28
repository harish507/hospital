import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArPage } from '../ar/ar';
import { CprPage } from '../cpr/cpr';
import { ShockPage } from '../shock/shock';
import { HattackPage } from '../hattack/hattack';
import { SuffPage } from '../suff/suff';
import { HangPage } from '../hang/hang';
import { DiabeticPage } from '../diabetic/diabetic';
import { ComaPage } from '../coma/coma';
import { StrokePage } from '../stroke/stroke';
import { BurnsPage } from '../burns/burns';
import { HeatPage } from '../heat/heat';
import { FeverPage } from '../fever/fever';
import { FoodPage } from '../food/food';
import { BleedPage } from '../bleed/bleed';
import { NosePage } from '../nose/nose';
import { SnakePage } from '../snake/snake';
import { ScorpianPage } from '../scorpian/scorpian';
import { AnimalPage } from '../animal/animal';
import { BrokenPage } from '../broken/broken';
import { WoundsPage } from '../wounds/wounds';
import { AbdominalPage } from '../abdominal/abdominal';

/**
 * Generated class for the FirstaidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firstaid',
  templateUrl: 'firstaid.html',
})
export class FirstaidPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstaidPage');
  }

  ar(){
    this.navCtrl.push(ArPage);
  }

  cpr(){
    this.navCtrl.push(CprPage);
  }
  
  shock(){
    this.navCtrl.push(ShockPage);
  }
  

  
  hattack(){
    this.navCtrl.push(HattackPage);
  }
  
  suff(){
    this.navCtrl.push(SuffPage);
  }
  
  hang(){
    this.navCtrl.push(HangPage);
  }
  
 

  
  diabetic(){
    this.navCtrl.push(DiabeticPage);
  }
  
  coma(){
    this.navCtrl.push(ComaPage);
  }
  
  stroke(){
    this.navCtrl.push(StrokePage);
  }
  
  burns(){
    this.navCtrl.push(BurnsPage);
  }
  
  heat(){
    this.navCtrl.push(HeatPage);
  }
  
  fever(){
    this.navCtrl.push(FeverPage);
  }
  
  food(){
    this.navCtrl.push(FoodPage);
  }
  
  bleed(){
    this.navCtrl.push(BleedPage);
  }
  
  nose(){
    this.navCtrl.push(NosePage);
  }
  
  snake(){
    this.navCtrl.push(SnakePage);
  }
  
  
  
  scorpian(){
    this.navCtrl.push(ScorpianPage);
  }
  
  animal(){
    this.navCtrl.push(AnimalPage);
  }
  
  broken(){
    this.navCtrl.push(BrokenPage);
  }
  
  wounds(){
    this.navCtrl.push(WoundsPage);
  }
  
  abdominal(){
    this.navCtrl.push(AbdominalPage);
  }
  
 



}
