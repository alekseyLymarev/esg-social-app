import {Component, OnInit} from '@angular/core';
import {Observable, shareReplay, switchMap} from 'rxjs';
import {ProfileService} from '../../../../Data/api/services/profile.service';
import {IUsersSearchData} from '../../../../Core/interfaces/users-search-data.interface';
import {map} from 'rxjs/operators';
import {ProfileViewModel} from '../../../../Data/api/models/profile-view-model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users-search-route',
  templateUrl: './users-search-route.component.html',
  styleUrls: ['./users-search-route.component.scss']
})
export class UsersSearchRouteComponent implements OnInit {
  users$ = this._route.queryParamMap
    .pipe(
      switchMap((searchData) => this._profilesService.profileGet$Json({
        FirstName: searchData.get('firstName') as string | undefined,
        ExternalValue: searchData.get('externalValue') as string | undefined,
        DictionaryElementId: searchData.get('dictionaryElementId') as string | undefined
      }).pipe(
        map((response) => response.profiles),
        shareReplay()
      )),
    ) as Observable<ProfileViewModel[]>;

  constructor(
    private _profilesService: ProfileService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  search(searchValue: IUsersSearchData) {
    this._router.navigate([], {
      queryParams: searchValue
    });
  }
}
