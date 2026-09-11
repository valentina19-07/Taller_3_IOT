import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormOrganism } from './login-form.organism';

describe('LoginFormOrganism', () => {
  let component: LoginFormOrganism;
  let fixture: ComponentFixture<LoginFormOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormOrganism]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
