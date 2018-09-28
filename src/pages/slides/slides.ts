import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';


/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 /** slides = [
    {
      ba
       image: "assets/imgs/70.jpg",
    },
    {
      image: "assets/imgs/71.jpg",   
     },
    {
      image: "assets/imgs/72.jpg",
    }
];*/

tabs(){
  this.navCtrl.push(TabsPage);
}
login(){
  this.navCtrl.push(LoginPage);
}
register(){
  this.navCtrl.push(RegisterPage);
}

}
