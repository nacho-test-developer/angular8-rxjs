import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListService {

  URI = "https://jsonplaceholder.typicode.com/";
  URI2 = "https://api.github.com/users/yoelnacho/repos";
  profile: Observable<any>;
  
  constructor(
    private _http: HttpClient
  ) { }

  getApi() {
    this._http.get(`${this.URI2}`)
      .subscribe(data => {
        console.log(data)
      })
  }
}