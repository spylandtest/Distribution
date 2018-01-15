import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopDetailsViewPage } from './shop-details-view';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { ShopdetailsServiceProvider } from '../../providers/shopdetails-service/shopdetails-service';


@NgModule({
  declarations: [
    ShopDetailsViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopDetailsViewPage),
  ],
  exports: [
    ShopDetailsViewPage
  ]
})
export class ShopDetailsViewPageModule {}
