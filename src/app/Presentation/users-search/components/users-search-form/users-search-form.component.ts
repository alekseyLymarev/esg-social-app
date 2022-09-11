import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {IUsersSearchData} from '../../../../Core/interfaces/users-search-data.interface';
import {debounceTime, shareReplay} from 'rxjs';
import {CategoryService} from '../../../../Data/api/services/category.service';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-users-search-form',
  templateUrl: './users-search-form.component.html',
  styleUrls: ['./users-search-form.component.scss']
})
export class UsersSearchFormComponent implements OnInit {

  categories$ = this._categoriesList.categoryGet$Json()
    .pipe(
      map(x => x.categories ?? []),
      shareReplay()
    );

  form = new FormGroup({
    firstName: new FormControl(),
    dictionaryElementId: new FormControl(),
    externalValue: new FormControl()
  });

  @Output() public searched = new EventEmitter<IUsersSearchData>();

  constructor(
    private _categoriesList: CategoryService,
    private _route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        debounceTime(800),
        untilDestroyed(this)
      )
      .subscribe(() => {
        this.searched.emit(this.form.value);
      })

    this._route.queryParamMap
      .subscribe(queryParams => {
        this.form.setValue({
          firstName: queryParams.get('firstName') ?? null,
          dictionaryElementId: queryParams.get('dictionaryElementId') ?? null,
          externalValue: queryParams.get('externalValue') ?? null
        })
      })
  }

}
