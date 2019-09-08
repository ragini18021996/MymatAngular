import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppRoutingModule,RouterTable } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {NgModule} from '@angular/core';
import{AmazingTimePickerModule} from 'amazing-time-picker';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,HttpClientModule,AmazingTimePickerModule,
    RouterModule.forRoot(RouterTable)
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
