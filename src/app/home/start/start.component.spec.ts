import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartComponent } from './start.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import { StorageService, UserService } from '../../_services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DialogResultMessageComponentHandler } from '../../widgets/dialog-result-message/dialog-result-message.component';
import { RouterTestingModule } from '@angular/router/testing';
import { OWL_DATE_TIME_LOCALE, OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { environment } from '../../../environments/environment';
import { ApiHandlerService } from '../../home/_home-services';

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartComponent ],
      imports: [
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        MatCardModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatDialogModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        RouterTestingModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MatTableModule,
        MatPaginatorModule
      ],
      providers: [
        DialogResultMessageComponentHandler,
        UserService,
        StorageService,
        LocalStorageService,
        ApiHandlerService,
        RouterModule,
        {provide: OWL_DATE_TIME_LOCALE, useValue: environment.DATE_TIME_LOCALE}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
