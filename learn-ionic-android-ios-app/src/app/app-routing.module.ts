import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'news-single', loadChildren: './news-single/news-single.module#NewsSinglePageModule' }
=======
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }
>>>>>>> initial commit
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
