import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

// Modules
import { MaterialModule } from '../material.module';
import { HomeRoutingModule } from './home-routing.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { MatDialogModule } from '@angular/material';

// Components
import { HomeIndexComponent } from './home-index.component';
import { StartComponent } from './start/start.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatDialogModule,
  ],
  declarations: [
    HomeIndexComponent,
    StartComponent,
  ],
  entryComponents: [ ],
  providers: [ {provide: OWL_DATE_TIME_LOCALE, useValue: environment.DATE_TIME_LOCALE} ]

})
export class HomeModule {
}
