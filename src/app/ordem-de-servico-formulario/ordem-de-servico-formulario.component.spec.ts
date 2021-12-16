import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemDeServicoFormularioComponent } from './ordem-de-servico-formulario.component';

describe('OrdemDeServicoFormularioComponent', () => {
  let component: OrdemDeServicoFormularioComponent;
  let fixture: ComponentFixture<OrdemDeServicoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdemDeServicoFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemDeServicoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
