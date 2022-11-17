import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { AppComponent } from './app.component';
import { SimpleDivDragComponent } from './simple-div-drag/simple-div-drag.component';
import { IssueCardComponent } from './issue-card/issue-card.component';
import { BoardComponent } from './board/board.component';
import { BoardListComponent } from './board-list/board-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDivDragComponent,
    IssueCardComponent,
    BoardComponent,
    BoardListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
