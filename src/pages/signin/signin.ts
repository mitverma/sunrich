import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag'; 
import { ApolloClient } from 'apollo-client';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { HttpClient } from '@angular/common/http';
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
 	uri: string;
 	constructor(public navCtrl: NavController, public navParams: NavParams, public apollo: Apollo) {

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


 	getList(){
 		this.apollo
 		.watchQuery({ 
 			query: gql`
 			query{
 				products {
 					edges {
 						node {
 							id name seoTitle thumbnailUrl description price {
 								currency amount
 							}
 						}
 					}
 				}}
 				`,
 			})
 		.valueChanges.subscribe(result => {
 			console.log(result, 'result');
 		});
 	}
 }
