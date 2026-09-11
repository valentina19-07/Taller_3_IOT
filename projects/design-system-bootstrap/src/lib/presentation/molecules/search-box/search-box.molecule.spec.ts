import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SearchBoxMolecule } from './search-box.molecule';

describe('SearchBoxMolecule', () => {
  let component: SearchBoxMolecule;
  let fixture: ComponentFixture<SearchBoxMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SearchBoxMolecule] }).compileComponents();
    fixture = TestBed.createComponent(SearchBoxMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear la molecula', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia emitir search con el termino correcto al buscar', () => {
    const spy = jest.spyOn(component.search, 'emit');
    // Simulate typing
    component.onValueChange('mi busqueda');
    // Simulate click
    component.onSearch();
    
    expect(spy).toHaveBeenCalledWith('mi busqueda');
  });
});
