import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginFormOrganism } from './login-form.organism';

describe('LoginFormOrganism', () => {
  let component: LoginFormOrganism;
  let fixture: ComponentFixture<LoginFormOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormOrganism],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería actualizar los valores de email y password', () => {
    component.onEmailChange('test@ejemplo.com');
    component.onPasswordChange('123456');

    expect(component.email).toBe('test@ejemplo.com');
    expect(component.password).toBe('123456');
  });

  it('Debería emitir formSubmit cuando email y password tienen valor', () => {
    const spy = jest.spyOn(component.formSubmit, 'emit');
    component.onEmailChange('test@ejemplo.com');
    component.onPasswordChange('123456');

    component.onSubmit();

    expect(spy).toHaveBeenCalledWith({
      email: 'test@ejemplo.com',
      password: '123456',
    });
  });

  it('No debería emitir formSubmit si falta algún campo', () => {
    const spy = jest.spyOn(component.formSubmit, 'emit');

    component.onEmailChange('test@ejemplo.com');
    component.onSubmit();
    expect(spy).not.toHaveBeenCalled();

    component.onEmailChange('');
    component.onPasswordChange('123456');
    component.onSubmit();
    expect(spy).not.toHaveBeenCalled();
  });
});
