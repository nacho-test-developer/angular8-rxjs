import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ListService {

  constructor(
    private _http: HttpClient
  ) { }

  getApi() {
    const URI = "https://jsonplaceholder.typicode.com/";

    this._http.get(`${URI}todos/1`).subscribe(
      data => {
        let res = data
        return res
        //console.log(res)
      }
    )
  }

}