import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_INPUT_ID, MOCK_INPUT_VALUE } from '../../../mocks/input.mocks';
import { InputAtom } from './input.atom';

describe('InputAtom', () => {
  let component: InputAtom;
  let fixture: ComponentFixture<InputAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [InputAtom] }).compileComponents();
    fixture = TestBed.createComponent(InputAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia mostrar el idInput', () => {
    component.idInput = MOCK_INPUT_ID;
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.id).toBe(MOCK_INPUT_ID);
  });

  it('Deberia emitir valueChange al escribir', () => {
    const spy = jest.spyOn(component.valueChange, 'emit');
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = MOCK_INPUT_VALUE;
    input.dispatchEvent(new Event('input'));
    expect(spy).toHaveBeenCalledWith(MOCK_INPUT_VALUE);
  });
});
