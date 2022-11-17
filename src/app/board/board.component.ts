import { Component, OnInit } from '@angular/core';
import { JLane, MOCK_LANES } from '../models/lane';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  lanes!: JLane[];
  constructor() { }

  ngOnInit(): void {
    this.lanes = MOCK_LANES;
  }

}
