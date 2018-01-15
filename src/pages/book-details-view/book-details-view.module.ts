import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookDetailsViewPage } from './book-details-view';

@NgModule({
  declarations: [
    BookDetailsViewPage,
  ],
  imports: [
    IonicPageModule.forChild(BookDetailsViewPage),
  ],
  exports: [
    BookDetailsViewPage
  ]
})
export class BookDetailsViewPageModule {}
