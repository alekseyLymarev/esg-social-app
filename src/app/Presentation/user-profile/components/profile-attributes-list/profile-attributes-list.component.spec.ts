import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAttributesListComponent } from './profile-attributes-list.component';

describe('ProfileAttributesListComponent', () => {
  let component: ProfileAttributesListComponent;
  let fixture: ComponentFixture<ProfileAttributesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAttributesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileAttributesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
