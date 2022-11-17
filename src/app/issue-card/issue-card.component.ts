import { Component, Input, OnInit } from '@angular/core';
import { JIssue } from '../models/lane';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.css']
})
export class IssueCardComponent implements OnInit {
  @Input() issue!: JIssue;
  constructor() { }

  ngOnInit(): void {
  }

}
