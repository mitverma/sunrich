import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage({
 	name : 'signin'
 })
 @Component({
 	selector: 'page-signin',
 	templateUrl: 'signin.html',
 })
 export class SigninPage {
 	userDetail: Object = {}; 
 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad SigninPage');
 	}
 	registerNow(){
 		this.navCtrl.push('register');
 	}

 	signIn(form){
 		if (form.valid) {
 			
 		}
 	}
 }
