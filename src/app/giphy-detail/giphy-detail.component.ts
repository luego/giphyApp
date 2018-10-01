import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GiphyapiService } from '../services/giphyapi.service';
import { DataResponse, Datum } from '../models/data-response.model';

@Component({
  selector: 'app-giphy-detail',
  templateUrl: './giphy-detail.component.html',
  styleUrls: ['./giphy-detail.component.css']
})
export class GiphyDetailComponent implements OnInit {
  gif: Datum;

  constructor(
    private route: ActivatedRoute,
    private http: GiphyapiService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getGif();
  }

  getGif(): any {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.getByid(id).subscribe(gif => (this.gif = gif.data));
  }

  goBack(): void {
    this.location.back();
  }
}
