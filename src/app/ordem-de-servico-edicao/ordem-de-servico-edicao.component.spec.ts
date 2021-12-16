import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemDeServicoEdicaoComponent } from './ordem-de-servico-edicao.component';

describe('OrdemDeServicoEdicaoComponent', () => {
  let component: OrdemDeServicoEdicaoComponent;
  let fixture: ComponentFixture<OrdemDeServicoEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdemDeServicoEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemDeServicoEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
