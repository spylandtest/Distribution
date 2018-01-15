import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodayBooksPage } from './today-books';

@NgModule({
  declarations: [
    TodayBooksPage,
  ],
  imports: [
    IonicPageModule.forChild(TodayBooksPage),
  ],
  exports: [
    TodayBooksPage
  ]
})
export class TodayBooksPageModule {}
