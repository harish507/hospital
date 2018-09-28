import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginPage } from '../login/login';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { AlertController, ToastController } from 'ionic-angular';
import { ErrorHandler, NgModule } from '@angular/core';
import {FormBuilder} from '@angular/forms';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export  class RegisterPage {
  
  userData = {
  name: '',
  email:'',
  phno:'',
  username:'',
  pass:''
   };
  submitAttempt: boolean = false;
  register: FormGroup;

  constructor(public http:Http,public navCtrl: NavController, public formBuilder: FormBuilder,public alertCtrl: AlertController, public toastCtrl: ToastController) {

    this.register = this.formBuilder.group({
    name: ['String', Validators.compose([Validators.minLength(6),Validators.maxLength(10),Validators.required])],
    email: ['String', Validators.compose([Validators.required])],
    phno: ['String', Validators.compose([Validators.required])],
   username: ['String', Validators.compose([Validators.minLength(6),Validators.maxLength(10),Validators.required])],
    pass: ['String', Validators.compose([Validators.minLength(6),Validators.maxLength(10), Validators.required])]
   
    });
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegPage');
  }
  
  reg() {

    this.submitAttempt = true;


    if(!this.register.valid){
      console.log("Not valid!");
    }

  else{
    let data = {
        name: this.userData.username,
        
        email: this.userData.email,
        phone: this.userData.phno,
        username: this.userData.username,
        password:this.userData.pass
        
      
    };
    console.log(data);

    this.http.post('http://localhost:3000/reg',data).pipe(
        map(res => res.json())
    ).subscribe(res => {
      console.log('POST Response:', res);
        this.navCtrl.push(LoginPage);
               
        this.showToast('',JSON.stringify(res));
    });
    /*this.http.get('http://localhost:3000/user').pipe(
        map(res => res.json())
    ).subscribe(response => {
        console.log('GET Response:', JSON.stringify(response));
        this.showToast('GET Response:', JSON.stringify(response));
    });*/

  }
}
  private showToast(message: string,res:Object) {
    let toast = this.toastCtrl.create({
      message: message + res,
      duration: 10000
    });
    toast.present();
  }
 
}

