import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersSearchRoutingModule} from './users-search-routing.module';
import {UsersSearchRouteComponent} from './routes/users-search-route/users-search-route.component';
import {UsersSearchFormComponent} from './components/users-search-form/users-search-form.component';
import {MaterialModule} from '../material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { UserSearchCardComponent } from './components/user-search-card/user-search-card.component';


@NgModule({
  declarations: [
    UsersSearchRouteComponent,
    UsersSearchFormComponent,
    UserSearchCardComponent
  ],
  imports: [
    CommonModule,
    UsersSearchRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UsersSearchModule {
}
