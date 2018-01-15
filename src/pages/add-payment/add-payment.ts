import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { PaymentListServiceProvider } from '../../providers/payment-list-service/payment-list-service';
import { AddPaymentServiceProvider } from '../../providers/add-payment-service/add-payment-service';

/**
 * Generated class for the AddPaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-payment',
  templateUrl: 'add-payment.html',
})
export class AddPaymentPage {
shopid;
  loading: Loading;
  createSuccess = false;
  addpaymentdetails = {amount: ''};
   cataloglist= [];
   paymentlist=[];
   shopId;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private paymentadd: AddPaymentServiceProvider,private paymentview: PaymentListServiceProvider, private loadingCtrl: LoadingController) {
    this.shopId = navParams.get('shopId');
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPaymentPage');
    this.getCatalogDetail(this.shopId);
  }
  public gotoHome() {
    
      window.location.reload();
 
    //console.log();
    //console.log();
   // this.navCtrl.push(ShopviewPage,{shopId:shopId,shop:shop});
   // this.navCtrl.push(ShopviewPage,{shopId:shopId,shop:shop});
//     this.nav.setRoot(ListTodayBooksPage,{shopId});
}


  public getCatalogDetail(shopId) {
    this.showLoading()
this.paymentview.getCatalogDetail(this.shopId).subscribe(res => {
 let success = res['access'];
if (success) {
       this.cataloglist = res['catalogList'];
         this.paymentlist = this.cataloglist['paymentlist'];
         
   console.log(this.cataloglist);
       setTimeout(() => {
        this.loading.dismiss();
    });
  //this.showPopup("Success", "Successfully Added");
} else {
  
}
},
error => {
setTimeout(() => {
       this.loading.dismiss();
    });
this.showPopup("Error", error);
});
}





  public addpayment() {
    this.showLoading()
this.paymentadd.addpayment(this.shopId, this.addpaymentdetails).subscribe(res => {
 let success = res['access'];
if (success) {
     // console.log(this.cataloglist);
       setTimeout(() => {
        this.loading.dismiss();
    });
 // this.showPopup("Success", "Successfully Added");
} else {
    let message = res['message'];
    if(message)
    {
       setTimeout(() => {
        this.loading.dismiss();
     });
     this.showPopup("Error",message);
    }
   else
   {
     setTimeout(() => {
        this.loading.dismiss();
     });
     this.showPopup("Error", "Problem in adding details.");
   }
}
},
error => {
setTimeout(() => {
       this.loading.dismiss();
    });
this.showPopup("Error", error);
});
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
