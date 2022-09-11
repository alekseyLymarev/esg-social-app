import {Component, Input, OnInit} from '@angular/core';
import {ProfileViewModel} from '../../../../Data/api/models/profile-view-model';

@Component({
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.scss']
})
export class UserProfileCardComponent implements OnInit {

  @Input() profile!: ProfileViewModel;

  constructor() { }

  ngOnInit(): void {
  }

}
