import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from "@angular/cdk/drag-drop";

import { AppComponent } from './app.component';
import { SimpleDivDragComponent } from './simple-div-drag/simple-div-drag.component';
import { IssueCardComponent } from './issue-card/issue-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDivDragComponent,
    IssueCardComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
