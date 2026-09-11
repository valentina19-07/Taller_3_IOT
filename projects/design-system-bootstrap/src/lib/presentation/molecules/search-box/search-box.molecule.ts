import { Component, EventEmitter, Output } from '@angular/core';
import { InputAtom } from '../../atoms/input/input.atom';
import { ButtonAtom } from '../../atoms/button/button.atom';

/**
 * Barra de búsqueda del Design System.
 *
 * @description
 * Componente tipo **Molécula** según Atomic Design.
 * Combina `InputAtom` y `ButtonAtom` para capturar un término de búsqueda.
 */
@Component({
  selector: 'dsb-search-box-molecule',
  templateUrl: './search-box.molecule.html',
  imports: [InputAtom, ButtonAtom],
})
export class SearchBoxMolecule {
  /** Término de búsqueda actual */
  term: string = '';

  /**
   * Evento emitido al presionar el botón de búsqueda.
   * @emits string Término de búsqueda ingresado
   */
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Actualiza el término de búsqueda interno.
   * @param {string} value Valor emitido por el InputAtom
   * @returns {void}
   */
  onValueChange(value: string): void {
    this.term = value;
  }

  /**
   * Emite el evento `search` con el término actual.
   * @returns {void}
   */
  onSearch(): void {
    this.search.emit(this.term);
  }
}
