import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public result;

  constructor(
    private _list: ListService
  ) { }

  ngOnInit() {
    this._list.getApi();
  }

}