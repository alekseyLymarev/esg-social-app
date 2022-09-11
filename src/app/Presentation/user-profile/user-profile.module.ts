import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserProfileRoutingModule} from './user-profile-routing.module';
import {UserProfileRouteComponent} from './routes/user-profile-route/user-profile-route.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {UserProfileCardComponent} from './components/user-profile-card/user-profile-card.component';
import {MaterialModule} from '../material/material.module';
import { ProfileAttributesListComponent } from './components/profile-attributes-list/profile-attributes-list.component';
import { ProfileAttributeFormComponent } from './components/forms/profile-attribute-form/profile-attribute-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UserProfileRouteComponent,
    UserProfileCardComponent,
    ProfileAttributesListComponent,
    ProfileAttributeFormComponent,
  ],
  exports: [
    UserProfileCardComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UserProfileModule {
}
