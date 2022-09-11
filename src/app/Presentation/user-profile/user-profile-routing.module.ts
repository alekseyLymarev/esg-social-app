import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserProfileRouteComponent} from './routes/user-profile-route/user-profile-route.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileRouteComponent,
  },
  {
    path: ':profileId',
    component: UserProfileRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule {
}
