import { Component, OnInit } from '@angular/core';
import { GiphyapiService } from '../services/giphyapi.service';
import { Datum } from '../models/data-response.model';
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

  constructor(private http: GiphyapiService) {}

  ngOnInit() {
    this.loadMore();
  }

  loadMore() {
    this.gifts$ = this.http.getTrending().pipe(
      map(res => {
        this.count = res.pagination.count;
        this.total = res.pagination.total_count;
        this.offset = res.pagination.offset;
        return res.data;
      })
    );
  }

  doSearch(text: string) {
    if (text === '') {
      this.loadMore();
    } else {
      this.gifts$ = this.http.search(text).pipe(
        map(res => {
          this.count = res.pagination.count;
          this.total = res.pagination.total_count;
          this.offset = res.pagination.offset;
          return res.data;
        })
      );
    }
  }
}
