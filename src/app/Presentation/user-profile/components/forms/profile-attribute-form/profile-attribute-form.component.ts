import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryViewModel} from '../../../../../Data/api/models/category-view-model';
import {of} from 'rxjs';
import {CategoryService} from '../../../../../Data/api/services/category.service';
import {map} from 'rxjs/operators';

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
  displayCategory = (category: CategoryViewModel) => {
    return this.categories.find(c => c.id === category?.id)?.name as string
  };

  constructor(
    public dialogRef: MatDialogRef<ProfileAttributeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Record<string, unknown>,
    private _categoryService: CategoryService
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
