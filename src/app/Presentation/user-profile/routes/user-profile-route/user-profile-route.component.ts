import {Component, Inject, OnInit} from '@angular/core';
import {Observable, of, shareReplay, switchMap} from 'rxjs';
import {ProfileAttributeViewModel} from '../../../../Data/api/models/profile-attribute-view-model';
import {MatDialog} from '@angular/material/dialog';
import {
  ProfileAttributeFormComponent
} from '../../components/forms/profile-attribute-form/profile-attribute-form.component';
import {ProfileService} from '../../../../Data/api/services/profile.service';
import {ActivatedRoute} from '@angular/router';
import {map, tap} from 'rxjs/operators';
import {appLocalStorage} from '../../../../Data/local-storage.provider';
import {CategoryService} from '../../../../Data/api/services/category.service';
import {CategoryListViewModel} from '../../../../Data/api/models/category-list-view-model';

@Component({
  selector: 'app-user-profile-route',
  templateUrl: './user-profile-route.component.html',
  styleUrls: ['./user-profile-route.component.scss']
})
export class UserProfileRouteComponent implements OnInit {
  profile$ = this._route.paramMap
    .pipe(
      switchMap(paramMap => this._profileService.profileIdGet$Json({
        id: paramMap.get('profileId') ?? this._ls.getItem('current_user_id') as string,
        authorizedUserId: this._ls.getItem('current_user_id') as string
      })
        .pipe(shareReplay())),

    )

  profileAttributes$: Observable<ProfileAttributeViewModel[]> = this.profile$.pipe(map(x => x.profileAttributes ?? []));

  // of([
  //      {
  //        id: '',
  //        dictionaryElement: {
  //          id: '',
  //          name: 'Университет'
  //        },
  //        externalValue: 'ОмГТУ'
  //      },
  //      {
  //        id: '',
  //        dictionaryElement: {
  //          id: '',
  //          name: 'Спициальность'
  //        },
  //        externalValue: 'Информатика и вычислительная техника'
  //      },
  //      {
  //        id: '',
  //        dictionaryElement: {
  //          id: '',
  //          name: 'Любимый автор'
  //        },
  //        externalValue: 'Пушкин А.С'
  //      },
  //      {
  //        id: '',
  //        dictionaryElement: {
  //          id: '',
  //          name: 'Любимый фильм'
  //        },
  //        externalValue: 'Игра эндера'
  //      },
  //      {
  //        id: '',
  //        dictionaryElement: {
  //          id: '',
  //          name: 'Любимый язык программирования'
  //        },
  //        externalValue: 'С#'
  //      },
  //      {
  //        id: '',
  //        dictionaryElement: {
  //          id: '',
  //          name: 'Любимая библиотека'
  //        },
  //        externalValue: 'Swashbuckle'
  //      }
  //    ])

  constructor(
    private _dialog: MatDialog,
    private _profileService: ProfileService,
    private _route: ActivatedRoute,
    @Inject(appLocalStorage) private _ls: Storage,
    private _categoriesService: CategoryService
  ) {
  }

  ngOnInit(): void {
  }

  openCreateAttributeForm() {
    this._categoriesService
      .categoryGet$Json()
      .subscribe((response: CategoryListViewModel) => {
        this._dialog.open(ProfileAttributeFormComponent, {
          data: {
            categories: response.categories
          }
        })
      });
  }
}
