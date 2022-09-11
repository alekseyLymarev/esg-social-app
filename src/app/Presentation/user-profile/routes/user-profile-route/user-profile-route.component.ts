import {Component, Inject, OnInit} from '@angular/core';
import {Observable, of, shareReplay, switchMap} from 'rxjs';
import {ProfileAttributeViewModel} from '../../../../Data/api/models/profile-attribute-view-model';
import {MatDialog} from '@angular/material/dialog';
import {
  ProfileAttributeFormComponent
} from '../../components/forms/profile-attribute-form/profile-attribute-form.component';
import {ProfileService} from '../../../../Data/api/services/profile.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map, tap} from 'rxjs/operators';
import {appLocalStorage} from '../../../../Data/local-storage.provider';
import {CategoryService} from '../../../../Data/api/services/category.service';
import {CategoryListViewModel} from '../../../../Data/api/models/category-list-view-model';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-user-profile-route',
  templateUrl: './user-profile-route.component.html',
  styleUrls: ['./user-profile-route.component.scss']
})
export class UserProfileRouteComponent implements OnInit {
  profile$ = this.getProfile();
  currentUserId: string | null = null;

  profileAttributes$: Observable<ProfileAttributeViewModel[]> = this.profile$
    .pipe(map(x => x.profileAttributes ?? []));

  constructor(
    private _dialog: MatDialog,
    private _profileService: ProfileService,
    private _route: ActivatedRoute,
    @Inject(appLocalStorage) private _ls: Storage,
    private _categoriesService: CategoryService,
    private _router: Router
  ) {
  }

  getProfile() {
    return this._route.paramMap
      .pipe(
        switchMap(paramMap => this._profileService.profileIdGet$Json({
          id: paramMap.get('profileId') ?? this._ls.getItem('current_profile_id') as string,
          authorizedUserId: this._ls.getItem('current_user_id') as string
        })
          .pipe()),
        shareReplay()
      )
  }

  ngOnInit(): void {
    this.currentUserId = this._ls.getItem('current_profile_id');
  }

  openCreateAttributeForm() {
    this._categoriesService
      .categoryGet$Json()
      .pipe(
        switchMap((response: CategoryListViewModel) => {
          return this._dialog.open(ProfileAttributeFormComponent, {
            data: {
              categories: response.categories
            }
          })
            .afterClosed()
        }),
        untilDestroyed(this)
      )
      .subscribe(data => {
        if (data) {
          this.profile$ = this.getProfile();
          this.profileAttributes$ = this.profile$
            .pipe(map(x => x.profileAttributes ?? []))
        }
      })
  }

  navigateToSearch(attribute: ProfileAttributeViewModel) {
    this._router.navigate(['users-search'], {
      queryParams: {
        dictionaryElementId: attribute.dictionaryElement?.id,
        externalValue: attribute.externalValue
      }
    })
  }
}
