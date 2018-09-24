import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import {HttpClientModule} from '@angular/common/http';
=======
>>>>>>> initial commit
=======
import {HttpClientModule} from '@angular/common/http';
>>>>>>> working app

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
<<<<<<< HEAD
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
>>>>>>> initial commit
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
>>>>>>> working app
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
