import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {IUsersSearchData} from '../../../../Core/interfaces/users-search-data.interface';
import {debounceTime} from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-users-search-form',
  templateUrl: './users-search-form.component.html',
  styleUrls: ['./users-search-form.component.scss']
})
export class UsersSearchFormComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl(),
    dictionaryElementId: new FormControl(),
    externalValue: new FormControl()
  });

  @Output() public searched = new EventEmitter<IUsersSearchData>();

  constructor() {
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
  }

}
