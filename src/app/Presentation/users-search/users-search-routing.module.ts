import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersSearchRouteComponent} from './routes/users-search-route/users-search-route.component';

const routes: Routes = [
  {
    path: '',
    component: UsersSearchRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersSearchRoutingModule {
}
