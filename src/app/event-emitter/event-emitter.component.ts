import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.css']
})
export class EventEmitterComponent implements OnInit {

  // El evento personalizado subscribed emitirá un valor de tipo number
  @Output() subscribed = new EventEmitter<number>();

  public count: number = 0;

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.count++;
    this.subscribed.emit(this.count);
  }

}