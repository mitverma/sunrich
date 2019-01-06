import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage({
	name: 'home'
})


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {
	}

	registerPage(){
		this.navCtrl.push('register');
	}
	// link graph ql
	//https://www.apollographql.com/docs/angular/basics/setup.html
}
