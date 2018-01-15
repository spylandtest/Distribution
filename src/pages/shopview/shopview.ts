import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { ShopdetailsServiceProvider } from '../../providers/shopdetails-service/shopdetails-service';
import { ListTodayBooksPage } from '../../pages/list-today-books/list-today-books';
import { AddPaymentPage } from '../../pages/add-payment/add-payment';
import { ListBookDistributionPage } from '../../pages/list-book-distribution/list-book-distribution';

/**
 * Generated class for the ShopviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shopview',
  templateUrl: 'shopview.html',
})
export class ShopviewPage {
  shop;
loading: Loading;
createSuccess = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,private shopdetail: ShopdetailsServiceProvider,private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    this.shop = navParams.get('shop');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopviewPage');
  }

  public shopbooks(shopId,shop) {
    console.log(shopId);
    console.log(shop);

    this.navCtrl.push(ListTodayBooksPage,{shopId,shop});
//     this.nav.setRoot(ListTodayBooksPage,{shopId});
} 
public addpaymentdetails(shopId,shop) {
  console.log(shopId);
  console.log(shop);

  this.navCtrl.push(AddPaymentPage,{shopId,shop});
//     this.nav.setRoot(ListTodayBooksPage,{shopId});
} 

public viewtodaybook(shopId) {
  console.log(shopId);
  this.navCtrl.push(ListBookDistributionPage,{shopId});
//     this.nav.setRoot(ListTodayBooksPage,{shopId});
} 


  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
       {
         text: 'OK',
         handler: data => {
           if (this.createSuccess) {
             this.navCtrl.popToRoot();
           }
         }
       }
     ]
    });
    alert.present();
  }

}
