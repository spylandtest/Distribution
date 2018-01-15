import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController, AlertController, Loading, LoadingController,NavParams,IonicPage } from 'ionic-angular';
import { BookServiceProvider } from '../../providers/book-service/book-service';
import { CatalogServiceProvider } from '../../providers/catalog-service/catalog-service';
/**
 * Generated class for the BookDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-book-details',
  templateUrl: 'book-details.html',
})
export class BookDetailsPage {

  loading: Loading;
   createSuccess = false;
    bookDetailsCredentials = {bookname: '',contributorId:'', price: '', totalquantity: '', companyName: '',description: '',publicationyear:'',booktype:''};
    cataloglist= [];
    authorList= [];
    shopsList= [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private book: BookServiceProvider,private catalog:CatalogServiceProvider, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookDetailsPage');
    this.getCatalogDetail();
  }


public getCatalogDetail() {
          this.showLoading()
    this.catalog.getCatalogDetail().subscribe(res => {
       let success = res['access'];
      if (success) {
             this.cataloglist = res['catalogList'];
               this.authorList = this.cataloglist['authorList'];
                this.shopsList = this.cataloglist['shopsList'];
         console.log(this.cataloglist);
             setTimeout(() => {
              this.loading.dismiss();
          });
        //this.showPopup("Success", "Successfully Added");
      } else {
        //  let message = res['message'];
        //  if(message)
        //  {
        //     setTimeout(() => {
        //      this.loading.dismiss();
        //   });
        //   this.showPopup("Error",message);
        //  }
        // else
        // {
        //    setTimeout(() => {
        //      this.loading.dismiss();
        //   });
        //   this.showPopup("Error", "Problem in adding details.");
        // }
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

  public bookdetails() {
          this.showLoading()
    this.book.bookdetails(this.bookDetailsCredentials).subscribe(res => {
       let success = res['access'];
      if (success) {
            console.log(this.cataloglist);
            console.log(this.bookDetailsCredentials);
             setTimeout(() => {
              this.loading.dismiss();
          });
        this.showPopup("Success", "Successfully Added");
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
