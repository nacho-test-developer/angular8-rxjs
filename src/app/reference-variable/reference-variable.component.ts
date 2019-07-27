import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-reference-variable',
  templateUrl: './reference-variable.component.html',
  styleUrls: ['./reference-variable.component.css']
})
export class ReferenceVariableComponent implements OnInit {

  @ViewChild('myReference') myInput: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.myInput.nativeElement.value);
  }

}