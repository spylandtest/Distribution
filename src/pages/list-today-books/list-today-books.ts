import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController, AlertController, Loading, LoadingController,NavParams,IonicPage } from 'ionic-angular';
import { ListtodaybookserviceProvider } from '../../providers/listtodaybookservice/listtodaybookservice';
import { CatalogServiceProvider } from '../../providers/catalog-service/catalog-service';
import { ReturnBookListServiceProvider } from '../../providers/return-book-list-service/return-book-list-service';
import { UpdateQuantityServiceProvider } from '../../providers/update-quantity-service/update-quantity-service';
import { ShopviewPage } from '../../pages/shopview/shopview';

/**
 * Generated class for the ListTodayBooksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list-today-books',
  templateUrl: 'list-today-books.html',
})
export class ListTodayBooksPage {

  loading: Loading;
  createSuccess = false;
  cataloglist= [];
  authorList= [];
  shopsList= [];
  bookList= [];
  todaybookList=[];
  quantitylist =[];
  returnquantitylist =[];
  bookidlist =[];

  shopId;
  shop;

 // addLead = { shopId: '', bookidlist: '', quantitylist:''};
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,private addquantity:ListtodaybookserviceProvider,private returnquantity: ReturnBookListServiceProvider,private updatequantity: UpdateQuantityServiceProvider, private catalog:CatalogServiceProvider, private loadingCtrl: LoadingController) {
    this.shopId = navParams.get('shopId');
    this.shop = navParams.get('shop');
    console.log(this.shopId);
    this.getCatalogDetail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListTodayBooksPage');
  }

  public gotoHome() {
    
      window.location.reload();
 
    console.log();
    console.log();
   // this.navCtrl.push(ShopviewPage,{shopId:shopId,shop:shop});
   // this.navCtrl.push(ShopviewPage,{shopId:shopId,shop:shop});
//     this.nav.setRoot(ListTodayBooksPage,{shopId});
}

  public getCatalogDetail() {
    this.showLoading()
this.catalog.getCatalogDetail().subscribe(res => {
 let success = res['access'];
if (success) {
       this.cataloglist = res['catalogList'];
       this.authorList = this.cataloglist['authorList'];
       this.shopsList = this.cataloglist['shopsList'];
       this.bookList = this.cataloglist['bookList'];
      this.todaybookList = this.cataloglist['todaybookList'];
         
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
showLoading() {
  this.loading = this.loadingCtrl.create({
  content: 'Please wait...'
 });
  this.loading.present();
}


//add quaantity

public updatequantitylist() {
  console.log(this.quantitylist);
  console.log(this.bookidlist);
  console.log(this.todaybookList);
  console.log(this.returnquantitylist);
 
  this.showLoading()
  this.updatequantity.updatequantitylist(this.shopId,this.quantitylist,this.bookList,this.returnquantitylist,this.todaybookList).subscribe(res => {
     let success = res['access'];
      //this.leadServiceId = res['leadServiceId']; 
      
    if (success) {
           this.createSuccess = true;
           setTimeout(() => {
           this.loading.dismiss();
        });
            

        this.showPopup("Success", "added  Successfully");
        
    } else {
       let message = res['message'];
       if(message)
       {
          setTimeout(() => {
           this.loading.dismiss();
        });
      this.showPopup("Successfully added",message);
       }
      else
      {
         setTimeout(() => {
           this.loading.dismiss();
        });
      this.showPopup("Error", "Problem adding deatils.");
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





//end add quantity

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
