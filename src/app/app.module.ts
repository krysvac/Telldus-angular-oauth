import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';

import { Ng2Webstorage } from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    HomeModule,
    Ng2Webstorage,
    MatDialogModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ],
  entryComponents: []
})
export class AppModule {}
