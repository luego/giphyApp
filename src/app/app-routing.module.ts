import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiphyHomeComponent } from './giphy-home/giphy-home.component';

const routes: Routes = [
  { path: 'home', component: GiphyHomeComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
