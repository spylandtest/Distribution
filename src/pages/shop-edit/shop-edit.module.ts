import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopEditPage } from './shop-edit';

@NgModule({
  declarations: [
    ShopEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopEditPage),
  ],
  exports: [
    ShopEditPage
  ]
})
export class ShopEditPageModule {}
