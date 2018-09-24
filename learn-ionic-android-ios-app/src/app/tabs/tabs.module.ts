import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { AboutPageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';
<<<<<<< HEAD
<<<<<<< HEAD
import { NewsPageModule } from '../news/news.module';
=======
>>>>>>> initial commit
=======
import { NewsPageModule } from '../news/news.module';
>>>>>>> working app

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
<<<<<<< HEAD
<<<<<<< HEAD
    ContactPageModule,
    NewsPageModule
=======
    ContactPageModule
>>>>>>> initial commit
=======
    ContactPageModule,
    NewsPageModule
>>>>>>> working app
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
