import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MessagesComponent } from '../messages/messages.component';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MessagesComponent
  ],
  exports: [LayoutComponent]
})
export class UiModule {}
