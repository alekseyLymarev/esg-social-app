/* tslint:disable */
/* eslint-disable */
import { CategoryViewModel } from './category-view-model';
import { DictionaryElementViewModel } from './dictionary-element-view-model';
export interface ProfileAttributeViewModel {
  category?: CategoryViewModel;
  dictionaryElement?: DictionaryElementViewModel;
  externalValue?: null | string;
  id?: string;
}
