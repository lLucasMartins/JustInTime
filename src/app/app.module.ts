import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import {StorageService} from './services/storage.service';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBermyL25ALV5-V8XVRrc0Ughn0rWBiA8Y",
  authDomain: "projetointerdisciplinar-611ca.firebaseapp.com",
  databaseURL: "https://projetointerdisciplinar-611ca.firebaseio.com",
  projectId: "projetointerdisciplinar-611ca",
  storageBucket: "projetointerdisciplinar-611ca.appspot.com",
  messagingSenderId: "842991520547",
  appId: "1:842991520547:web:242a9ce491a9dc58679a96"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule
  ],
  providers: [
    StorageService,
    DatePipe,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,
     },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
