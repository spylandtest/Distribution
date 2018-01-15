import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListTodayBooksPage } from './list-today-books';

@NgModule({
  declarations: [
    ListTodayBooksPage,
  ],
  imports: [
    IonicPageModule.forChild(ListTodayBooksPage),
  ],
  exports: [
    ListTodayBooksPage
  ]
})
export class ListTodayBooksPageModule {}
