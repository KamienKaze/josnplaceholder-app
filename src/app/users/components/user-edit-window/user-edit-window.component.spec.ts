import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditWindowComponent } from './user-edit-window.component';

describe('UserEditWindowComponent', () => {
  let component: UserEditWindowComponent;
  let fixture: ComponentFixture<UserEditWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEditWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserEditWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
