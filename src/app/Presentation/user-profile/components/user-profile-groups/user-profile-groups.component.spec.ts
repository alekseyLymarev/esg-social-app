import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileGroupsComponent } from './user-profile-groups.component';

describe('UserProfileGroupsComponent', () => {
  let component: UserProfileGroupsComponent;
  let fixture: ComponentFixture<UserProfileGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
