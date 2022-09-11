import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../../../Data/api/services/user.service';
import {first} from 'rxjs';
import {appLocalStorage} from '../../../../Data/local-storage.provider';
import {UserViewModel} from '../../../../Data/api/models/user-view-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    login: new FormControl(),
    password: new FormControl()
  })

  constructor(
    private _usersService: UserService,
    @Inject(appLocalStorage) private _ls: Storage,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
  }

  authorize() {
    if (this.form.valid) {
      this._usersService.userAuthorizePost$Json({
        body: {
          login: this.form.value.login,
          password: this.form.value.password
        }
      })
        .pipe(
          first()
        )
        .subscribe((response: UserViewModel) => {
          if (response?.id) {
            this._ls.setItem('current_user_id', response.id)
            this._ls.setItem('current_profile_id', response.profile?.id as string)
            this._router.navigate(['profile', response.profile?.id])
          }
        })
    }
  }
}
