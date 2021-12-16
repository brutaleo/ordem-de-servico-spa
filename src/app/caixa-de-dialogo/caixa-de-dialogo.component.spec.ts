import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaDeDialogoComponent } from './caixa-de-dialogo.component';

describe('CaixaDeDialogoComponent', () => {
  let component: CaixaDeDialogoComponent;
  let fixture: ComponentFixture<CaixaDeDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixaDeDialogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaDeDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
