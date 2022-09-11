/* tslint:disable */
/* eslint-disable */
import { ProfileAttributeViewModel } from './profile-attribute-view-model';
import { ProfileLaceViewModel } from './profile-lace-view-model';
export interface ProfileViewModel {
  email?: null | string;
  id?: string;
  name?: null | string;
  profileAttributes?: null | Array<ProfileAttributeViewModel>;
  profileLaces?: null | Array<ProfileLaceViewModel>;
  surname?: null | string;
  telegram?: null | string;
}
