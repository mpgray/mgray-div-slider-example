import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import {MatCardModule, MatIconModule, MatTabsModule, MatButtonModule, MatSliderModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { DivExampleComponent } from './div-example/div-example.component';
import {RESTService} from './div-example/div-example.service';

@NgModule({
  declarations: [
    AppComponent,
    DivExampleComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSliderModule,
    MatMenuModule
  ],
  providers: [RESTService],
  bootstrap: [AppComponent]
})
export class AppModule { }
