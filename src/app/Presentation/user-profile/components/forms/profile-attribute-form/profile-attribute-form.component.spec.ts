import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAttributeFormComponent } from './profile-attribute-form.component';

describe('ProfileAttributeFormComponent', () => {
  let component: ProfileAttributeFormComponent;
  let fixture: ComponentFixture<ProfileAttributeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAttributeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileAttributeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
