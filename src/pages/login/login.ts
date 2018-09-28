import { Component } from '@angular/core';
import { IonicPage,  NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Nav } from 'ionic-angular/navigation/nav-interfaces';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage  {
   loginform:FormGroup;
   userData={"username":"","password":""};
 
   ngOnInit() {
     this.loginform = new FormGroup({
       username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(10)]),
       password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
     });
   }
   
   constructor(public navCtrl : NavController,public navParams: NavParams) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  register(){
    this.navCtrl.push(RegisterPage);
  }
  
 
}
