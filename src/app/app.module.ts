import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { GiphyHomeComponent } from './giphy-home/giphy-home.component';
import { GiphyapiService } from './services/giphyapi.service';
import { HttpClientModule } from '@angular/common/http';
import { GiphySearchComponent } from './giphy-search/giphy-search.component';
import { GiphyDetailComponent } from './giphy-detail/giphy-detail.component';

@NgModule({
  declarations: [AppComponent, GiphyHomeComponent, GiphySearchComponent, GiphyDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, UiModule],
  providers: [GiphyapiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
