import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.css']
})
export class GiphySearchComponent implements OnInit {
  constructor() {}

  @Output()
  doSearch = new EventEmitter<string>();

  ngOnInit() {}

  search(value: string) {
    this.doSearch.emit(value);
  }
}
