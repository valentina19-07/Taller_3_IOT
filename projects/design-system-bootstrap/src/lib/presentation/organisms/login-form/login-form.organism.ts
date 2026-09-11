import { Component, EventEmitter, Output } from '@angular/core';
import { FormFieldMolecule } from '../../molecules/form-field/form-field.molecule';
import { ButtonAtom } from '../../atoms/button/button.atom';
import { LoginFormData } from '../../../core/interfaces/core.interface';

/**
 * Formulario de inicio de sesión del Design System.
 *
 * @description
 * Componente tipo **Organismo** según Atomic Design.
 * Orquesta dos `FormFieldMolecule` (email y contraseña) y un `ButtonAtom`
 * para construir un formulario de login completo.
 */
@Component({
  selector: 'dsb-login-form-organism',
  templateUrl: './login-form.organism.html',
  imports: [FormFieldMolecule, ButtonAtom],
})
export class LoginFormOrganism {
  /** Correo ingresado internamente */
  private email: string = '';

  /** Contraseña ingresada internamente */
  private password: string = '';

  /**
   * Evento emitido al enviar el formulario, solo si ambos campos tienen valor.
   * @emits LoginFormData Datos capturados del formulario
   */
  @Output() formSubmit: EventEmitter<LoginFormData> = new EventEmitter<LoginFormData>();

  /**
   * Actualiza el email capturado.
   * @param {string} value Valor emitido por el campo de correo
   * @returns {void}
   */
  onEmailChange(value: string): void { this.email = value; }

  /**
   * Actualiza la contraseña capturada.
   * @param {string} value Valor emitido por el campo de contraseña
   * @returns {void}
   */
  onPasswordChange(value: string): void { this.password = value; }

  /**
   * Valida y emite los datos del formulario.
   * @returns {void}
   */
  onSubmit(): void {
    if (this.email && this.password) {
      this.formSubmit.emit({ email: this.email, password: this.password });
    }
  }
}
