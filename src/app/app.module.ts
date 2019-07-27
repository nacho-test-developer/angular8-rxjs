import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { ReferenceVariableComponent } from './reference-variable/reference-variable.component';
import { ListComponent } from './list/list.component';
import { ListService } from './list/list.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, EventEmitterComponent, ReferenceVariableComponent, ListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ListService]
})
export class AppModule { }
