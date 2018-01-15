import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListBookDistributionPage } from './list-book-distribution';

@NgModule({
  declarations: [
    ListBookDistributionPage,
  ],
  imports: [
    IonicPageModule.forChild(ListBookDistributionPage),
  ],
  exports: [
    ListBookDistributionPage
  ]
})
export class ListBookDistributionPageModule {}
