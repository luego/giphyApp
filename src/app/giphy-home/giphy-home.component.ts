import { Component, OnInit } from '@angular/core';
import { GiphyapiService } from '../services/giphyapi.service';
import { Datum, DataResponse } from '../models/data-response.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-giphy-home',
  templateUrl: './giphy-home.component.html',
  styleUrls: ['./giphy-home.component.css']
})
export class GiphyHomeComponent implements OnInit {
  total: number;
  gifts$: Observable<Datum[]>;
  count: number;
  offset: number;
  more: number;
  page: number;
  gifts: Datum[];

  constructor(private http: GiphyapiService) {
    this.more = 0;
    this.page = 0;
    this.gifts = [];
  }

  ngOnInit() {
    this.loadMore(this.more);
  }

  loadMore(more: number) {
    this.http
      .getTrending(more)
      .pipe(map(res => this.mapResults(res)))
      .subscribe(x => {
        this.gifts.push(...x);
      });
  }

  doSearch(text: string) {
    if (text === '') {
      this.loadMore(0);
    } else {
      this.gifts$ = this.http
        .search(text)
        .pipe(map(res => this.mapResults(res)));
    }
  }

  mapResults(res: DataResponse<Datum[]>) {
    this.count = res.pagination.count;
    this.total = res.pagination.total_count;
    this.offset = res.pagination.offset;
    return res.data;
  }

  doLoadMore() {
    this.more += 25;
    this.loadMore(this.more);
  }
}
