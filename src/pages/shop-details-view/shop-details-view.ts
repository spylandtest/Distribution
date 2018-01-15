import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { ShopdetailsServiceProvider } from '../../providers/shopdetails-service/shopdetails-service';
import { ShopviewPage } from '../../pages/shopview/shopview';
/**
 * Generated class for the ShopDetailsViewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shop-details-view',
  templateUrl: 'shop-details-view.html',
})
export class ShopDetailsViewPage {
loading: Loading;
shopList=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private shopdetail: ShopdetailsServiceProvider,private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
 
}

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopDetailsViewPage');
    this.getShops();
  }
  


   public getShops() {
    this.showLoading()
    this.shopdetail.getShopdetail().subscribe(res => {
      let allowed = res['access'];
      if (allowed) {
        setTimeout(() => {
        this.loading.dismiss();
        this.shopList = res['list'];
         console.log(this.shopList);
        });
      } else {
      
      let message = res['message'];
      if(message)
         this.showPopup("Error", message);
      else
        this.showPopup("Error", "Access Denied");
      }
    },
    error => {
       this.showPopup("Error", error);
    });
  }



  

   public shopView(shop) {
      //console.log(recorddetail);
  //   let id = recorddetail['id'];
      this.navCtrl.push(ShopviewPage,{shop});
   }

   showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
 
 

  showPopup(title, text) {
     setTimeout(() => {
      this.loading.dismiss();
    });
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
       {
         text: 'OK'
       }
     ]
    });
    alert.present();
  }

}
