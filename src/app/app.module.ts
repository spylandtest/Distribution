import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule  } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShopRegisterPage } from '../pages/shop-register/shop-register';
import { BookDetailsPage } from '../pages/book-details/book-details';
import { ShopviewPage } from '../pages/shopview/shopview';
import { BookviewPage } from '../pages/bookview/bookview';
import { ShopDetailsViewPage } from '../pages/shop-details-view/shop-details-view';
import { BookDetailsViewPage } from '../pages/book-details-view/book-details-view';
import { TodayBooksPage } from '../pages/today-books/today-books';
import { ListTodayBooksPage } from '../pages/list-today-books/list-today-books';
import { ListBookDistributionPage } from '../pages/list-book-distribution/list-book-distribution';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { BookServiceProvider } from '../providers/book-service/book-service';
import { BookdetailsServiceProvider } from '../providers/bookdetails-service/bookdetails-service';
import { ShopdetailsServiceProvider } from '../providers/shopdetails-service/shopdetails-service';
import { BookviewServiceProvider } from '../providers/bookview-service/bookview-service';
import { CatalogServiceProvider } from '../providers/catalog-service/catalog-service';
import { ShopeditProvider } from '../providers/shopedit/shopedit';
import { AddtodaybooksProvider } from '../providers/addtodaybooks/addtodaybooks';
import { ListtodaybookserviceProvider } from '../providers/listtodaybookservice/listtodaybookservice';
import { AddPaymentPage } from '../pages/add-payment/add-payment';
import { AddPaymentServiceProvider } from '../providers/add-payment-service/add-payment-service';
import { PaymentListServiceProvider } from '../providers/payment-list-service/payment-list-service';
import { ListBookDistributionServiceProvider } from '../providers/list-book-distribution-service/list-book-distribution-service';
import { ReturnBookListServiceProvider } from '../providers/return-book-list-service/return-book-list-service';
import { UpdateQuantityServiceProvider } from '../providers/update-quantity-service/update-quantity-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShopRegisterPage,
    BookDetailsPage,
    ShopviewPage,
    ShopDetailsViewPage,
    BookviewPage,
    BookDetailsViewPage,
    TodayBooksPage,
    ListTodayBooksPage,
    AddPaymentPage,
    ListBookDistributionPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'back',
      backButtonIcon: 'ios-arrow-back',
      iconMode: 'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShopRegisterPage,
    BookDetailsPage,
    ShopviewPage,
    ShopDetailsViewPage,
    BookviewPage,
    BookDetailsViewPage,
    TodayBooksPage,
    ListTodayBooksPage,
    AddPaymentPage,
    ListBookDistributionPage
  ],
  providers: [
    StatusBar,
   HttpModule,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    BookServiceProvider,
    BookdetailsServiceProvider,
    ShopdetailsServiceProvider,
    BookviewServiceProvider,
    CatalogServiceProvider,
    ShopeditProvider,
    AddtodaybooksProvider,
    ListtodaybookserviceProvider,
    AddPaymentServiceProvider,
    PaymentListServiceProvider,
    ListBookDistributionServiceProvider,
    ReturnBookListServiceProvider,
    UpdateQuantityServiceProvider,
    
  ]
})
export class AppModule {}
