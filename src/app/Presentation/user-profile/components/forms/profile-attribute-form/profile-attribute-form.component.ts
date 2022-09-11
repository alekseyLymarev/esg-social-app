import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryViewModel} from '../../../../../Data/api/models/category-view-model';
import {of, startWith} from 'rxjs';
import {CategoryService} from '../../../../../Data/api/services/category.service';
import {map} from 'rxjs/operators';
import {ProfileAttributeService} from '../../../../../Data/api/services/profile-attribute.service';
import {appLocalStorage} from '../../../../../Data/local-storage.provider';
import {ProfileAttributeViewModel} from '../../../../../Data/api/models/profile-attribute-view-model';
import {DictionaryElementViewModel} from '../../../../../Data/api/models/dictionary-element-view-model';

@Component({
  selector: 'app-profile-attribute-form',
  templateUrl: './profile-attribute-form.component.html',
  styleUrls: ['./profile-attribute-form.component.scss']
})
export class ProfileAttributeFormComponent implements OnInit {
  form = new FormGroup({
    attributeName: new FormControl(),
    attributeValue: new FormControl()
  })
  categories: CategoryViewModel[] = [];
  displayCategory = (category: DictionaryElementViewModel | null | undefined) => {
    return category?.name as string
  };
  elements$ = this.form.get('attributeName')!.valueChanges
    .pipe(
      startWith(null),
      map((categoryId: string) => categoryId ? this.categories.find(c => c.id === categoryId) : null),
      map((category: CategoryViewModel | null | undefined) => category?.dictionaryElements || [])
    )

  constructor(
    public dialogRef: MatDialogRef<ProfileAttributeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Record<string, unknown>,
    @Inject(appLocalStorage) private _ls: Storage,
    private _categoryService: CategoryService,
    private _profileAttributeService: ProfileAttributeService
  ) {
  }

  ngOnInit(): void {
    console.log(this.data);
    this.categories = this.data['categories'] as CategoryViewModel[];
    this.form.valueChanges.subscribe(data => {
      console.log(data);
    })
  }

  save() {
    this._profileAttributeService.profileAttributePost({
      body: {
        profileId: this._ls.getItem('current_profile_id') as string,
        categoryId: this.form.value.attributeName,
        dictionaryElementId: typeof this.form.value.attributeValue !== 'string' ? this.form.value.attributeValue.id : undefined,
        externalValue: typeof this.form.value.attributeValue === 'string' ? this.form.value.attributeValue : undefined,
      }
    })
      .subscribe(() => {
        this.dialogRef.close(true)
      });
  }

  cancel() {
    this.dialogRef.close();
  }

  createDictionaryElement() {
    // const dictionaryElement = this.form.get('attributeValue').value;
    // if (typeof dictionaryElement === 'string') {
    //   const currentCategory = this.categories.find(x => x.name === dictionaryElement);
    //
    //   if (currentCategory) {
    //     return of(currentCategory.id)
    //   } else {
    //     return this._categoryService.categoryPost({
    //       body: {
    //         name: dictionaryElement
    //       }
    //     })
    //       .pipe(map((c) => c))
    //   }
    // } else {
    //   return dictionaryElement.id;
    // }
  }

}
