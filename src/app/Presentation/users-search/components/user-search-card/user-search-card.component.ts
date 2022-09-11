import {Component, Input, OnInit} from '@angular/core';
import {ProfileViewModel} from '../../../../Data/api/models/profile-view-model';

@Component({
  selector: 'app-user-search-card',
  templateUrl: './user-search-card.component.html',
  styleUrls: ['./user-search-card.component.scss']
})
export class UserSearchCardComponent implements OnInit {

  @Input() user!: ProfileViewModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
