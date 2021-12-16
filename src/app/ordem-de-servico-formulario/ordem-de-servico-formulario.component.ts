import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ordem-de-servico-formulario',
  templateUrl: './ordem-de-servico-formulario.component.html',
  styleUrls: ['./ordem-de-servico-formulario.component.css']
})
export class OrdemDeServicoFormularioComponent implements OnInit {

  public nomeDaAcao = 'Editar';
  public formularioOrdemDeServico!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  private criarFormulario(){
    this.formularioOrdemDeServico = this.formBuilder.group({
      convenio: ['',Validators.required],
      medico: [''],
      paciente: [''],
      postoColeta: [''],
      dataDeCadastro: [''],

    });
  }

  public cancelar() {

  }

  public salvar() {

  }
}
