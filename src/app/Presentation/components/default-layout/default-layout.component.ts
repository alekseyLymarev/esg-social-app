import {Component, Inject, OnInit} from '@angular/core';
import {appLocalStorage} from '../../../Data/local-storage.provider';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

  navItems = [
    {
      title: 'Мой профиль',
      route: ['profile', this._ls.getItem('current_profile_id')]
    },
    {
      title: 'Поиск',
      route: ['users-search']
    }
  ]

  constructor(
    @Inject(appLocalStorage) private _ls: Storage
  ) { }

  ngOnInit(): void {
  }

}
