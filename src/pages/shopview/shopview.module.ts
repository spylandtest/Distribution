import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopviewPage } from './shopview';

@NgModule({
  declarations: [
    ShopviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopviewPage),
  ],
  exports: [
    ShopviewPage
  ]
})
export class ShopviewPageModule {}
