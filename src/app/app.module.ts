import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {DefaultLayoutComponent} from './Presentation/components/default-layout/default-layout.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ApiModule} from './Data/api/api.module';
import {HttpClientModule} from '@angular/common/http';
import {appLocalStorage} from './Data/local-storage.provider';
import {environment} from '../environments/environment';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApiModule.forRoot({rootUrl: environment.apiRoot}),
    MatTabsModule
  ],
  providers: [
    {
      provide: appLocalStorage,
      useValue: window.localStorage
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
