import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookviewPage } from './bookview';

@NgModule({
  declarations: [
    BookviewPage,
  ],
  imports: [
    IonicPageModule.forChild(BookviewPage),
  ],
  exports: [
    BookviewPage
  ]
})
export class BookviewPageModule {}
