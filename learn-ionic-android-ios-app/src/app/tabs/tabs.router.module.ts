import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
<<<<<<< HEAD
<<<<<<< HEAD
import { NewsPage } from '../news/news.page'
=======
>>>>>>> initial commit
=======
import { NewsPage } from '../news/news.page'
>>>>>>> working app

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
<<<<<<< HEAD
<<<<<<< HEAD
        path: 'news',
        outlet: 'news',
        component: NewsPage
=======
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
>>>>>>> initial commit
=======
        path: 'news',
        outlet: 'news',
        component: NewsPage
>>>>>>> working app
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      }
    ]
  },
  {
    path: '',
<<<<<<< HEAD
<<<<<<< HEAD
    redirectTo: '/tabs/(news:news)',
=======
    redirectTo: '/tabs/(home:home)',
>>>>>>> initial commit
=======
    redirectTo: '/tabs/(news:news)',
>>>>>>> working app
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
