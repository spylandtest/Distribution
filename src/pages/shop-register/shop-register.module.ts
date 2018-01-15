import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopRegisterPage } from './shop-register';

@NgModule({
  declarations: [
    ShopRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopRegisterPage),
  ],
  exports: [
    ShopRegisterPage
  ]
})
export class ShopRegisterPageModule {}
