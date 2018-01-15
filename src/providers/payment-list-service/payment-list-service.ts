import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { api } from "../../app/global";

/*
  Generated class for the PaymentListServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PaymentListServiceProvider {

  constructor(public http: Http) {
    console.log('Hello PaymentListServiceProvider Provider');
  }


  public getCatalogDetail(shopId) {
    
    return Observable.create(observer => {
      // At this point make a request to your backend to make a real check!
   //   let empVendorUrl = api.empVendorUrl;
      let viewpaymentlistUrl = api.endPoint+api.viewpaymentlistUrl;
      let headers = new Headers();
      let res = Array();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
     // let data = "employee=154";
     let data = "shopId="+shopId;
       //var data = JSON.stringify({username: credentials.email});
     //console.log(data);
      this.http.post(viewpaymentlistUrl,data,{headers: headers})
      .subscribe(data => {
       console.log(JSON.stringify(data.json));
        let response = data.json();
     //   console.log(response);
        let access = response.success;
        // console.log(access);
         if (access==true) {
        let cataloglist = response.extras.cataloglist;
        console.log('hello moto');
         console.log(cataloglist);
        res['catalogList'] = cataloglist;
       // let access = true;
         }
        res['access'] = access;         
        res['message'] = false;
          observer.next(res);
          observer.complete();
      }, error => {
        let access = false;
        res['access'] = access;
        res['message'] = 'Oops! we had a problem.  Please try again in a few minutes';
         observer.next(res);
          observer.complete();
         
      });

      });
  }

}
