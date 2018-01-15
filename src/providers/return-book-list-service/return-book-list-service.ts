import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { api } from "../../app/global";

/*
  Generated class for the ReturnBookListServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ReturnBookListServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ReturnBookListServiceProvider Provider');
  }

  public returnlistbook(shopId,returnquantitylist,todaybookList) {
    
   {
    // var addList = [];
    console.log(todaybookList);
     returnquantitylist=JSON.stringify(returnquantitylist);
     todaybookList=JSON.stringify(todaybookList);
     return Observable.create(observer => {
       // At this point store the credentials to your backend!
     //  let signUpUrl = api.signUpUrl;
     //  let signUpUrl = api.endPoint+api.signUpUrl;
   
     let returnbooklistUrl = api.endPoint+api.returnbooklistUrl;
         let headers = new Headers();
         let res = Array();
         headers.append('Content-Type', 'application/x-www-form-urlencoded');
          let data = "shopid="+shopId+"&returnquantitylist="+returnquantitylist+"&todaybookList="+todaybookList;
         // var data = JSON.stringify({username: credentials.email});
          console.log(data);
         this.http.post(returnbooklistUrl,data,{headers: headers})
         .subscribe(data => {
         
           let response = data.json();
           let access = response.success;
           let bookdetails = response.bookdetails;
           console.log('hello moto');
           console.log(bookdetails);
        //    console.log(JSON.stringify(access.json()));
        console.log(JSON.stringify(access));
           res['access'] = access;
           res['message'] = false;
       //     observer.next(res);
      //      observer.complete();
      if (access==false)
             res['message'] =  response.message;
             observer.next(res);
             observer.complete();
         
         }, error => {
          let access = false;
           res['access'] = access;
           res['message'] = 'Oops! we had a problem.  Please try again in a few minutes';
            observer.next(res);
             observer.complete();
            
            // console.log(JSON.stringify(error.json()));
         });
     });
   
   
   }
   
   
   }



}
