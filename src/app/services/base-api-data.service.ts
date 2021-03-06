import { Injectable } from '@angular/core';
import {Http, URLSearchParams, Response, RequestOptions, Headers, ResponseContentType} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

const BASE_API_URL : string = 'https://donna-backend.herokuapp.com/api/';
export class BaseAPIDataService {

  constructor(private http:Http) { }

  postData(path:string, form:any) {
    let body = new FormData();
    for( var key in form) {
      if(form.hasOwnProperty(key)) {
        body.append(key, form[key]);
      }
    }
    return this.http.post(BASE_API_URL + path, body)
                    .map(res=> res.json()).catch(this.handleError);
  }

  postFile(path:string, name:string, file: File) {
        let formData:FormData = new FormData();
        formData.append(name, file, file.name);
        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 */
        headers.append('enctype', 'multipart/form-data')
        let options = new RequestOptions({ headers: headers });


        console.log(BASE_API_URL + path);
        return this.http.post(BASE_API_URL + path, formData, options)
            .map(res => res.json())
            .catch(this.handleError)
  }

  getData(path:string, paramsMap:any){
    let params:URLSearchParams = new URLSearchParams();
    for( var key in paramsMap) {
      if(paramsMap.hasOwnProperty(key)) {
        params.set(key, paramsMap[key]);
      }
    }
    console.log(BASE_API_URL + path);
    return this.http.get(BASE_API_URL + path, {
                        search: params
                      }).map(res => res.json())
                        .catch(this.handleError);
  }
  getBlobData(path:string, filename: string) {
    console.log(BASE_API_URL + path);
    let headers = new Headers({ 'Content-Type': 'application/json','Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers, responseType: ResponseContentType.Blob });
    return this.http.get(BASE_API_URL + path, options)
            .map(res => res.blob())
            .catch(this.handleError)
            .subscribe(res => this.downloadFile(res, filename));
  }
  private downloadFile(response, filename) {
    var blob = new Blob([response], { type: 'application/json' });
    let url = window.URL.createObjectURL(blob);
    if(navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, filename);
    } else {
        let a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    window.URL.revokeObjectURL(url);
  }
  deleteData(path:string, paramsMap:any){
    var options = new RequestOptions({
        body: JSON.stringify(paramsMap)
      });
    console.log(BASE_API_URL + path);
    return this.http.delete(BASE_API_URL + path, options).map(res => res.json())
                        .catch(this.handleError);
  }
  private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json() || 'Server error');
  }
}
