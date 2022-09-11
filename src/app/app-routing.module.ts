import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultLayoutComponent} from './Presentation/components/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./Presentation/user-profile/user-profile.module').then(m => m.UserProfileModule)
      },
      {
        path: 'users-search',
        loadChildren: () => import('./Presentation/users-search/users-search.module').then(m => m.UsersSearchModule)
      },
      {
        path: 'authorization',
        loadChildren: () => import('./Presentation/authorize/authorize.module').then(m => m.AuthorizeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
