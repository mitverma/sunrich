import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';



import { HttpClientModule ,HttpHeaders} from "@angular/common/http";
import { ApolloModule, APOLLO_OPTIONS,Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from 'apollo-client';
import { HttpModule } from '@angular/http';
import graphql from 'graphql-anywhere'




const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') || null)
  });

  return forward(operation);
});


@NgModule({ 
  declarations: [ 
  MyApp, 
  ], 
  imports: [
  BrowserModule, 
  HttpClientModule,
  ApolloModule,
  HttpLinkModule,
  HttpModule,
  IonicModule.forRoot(MyApp),
  HomePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  ],
  providers: [
  StatusBar,
  SplashScreen,
  HttpLinkModule,
  HttpLink,
  Apollo,
  {provide: ErrorHandler, useClass: IonicErrorHandler},
  ],
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink 
    ) {

    // if token is used uncmment this AND header section
    // let token = "";

    apollo.create({
      link: httpLink.create({
        uri: "http://www.sunrichrice.com/graphql/",    
        // headers: new HttpHeaders({
          //   authorization: "Bearer " + token
          // })
        }),
      cache: new InMemoryCache()
    });
  }
}
