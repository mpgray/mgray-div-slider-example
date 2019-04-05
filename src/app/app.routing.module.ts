import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {DivExampleComponent} from './div-example/div-example.component';
import {MatSliderModule} from '@angular/material/slider';

const routes: Routes = [{
  path: '',
  redirectTo: 'div-example',
  pathMatch: 'full'
}, {
  path: 'div-example',
  component: DivExampleComponent,
  data: {title: 'Div Example'}
}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
