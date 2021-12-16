import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrdemDeServico} from "../modelo/OrdemDeServico";

@Component({
  selector: 'app-ordem-de-servico-formulario',
  templateUrl: './ordem-de-servico-formulario.component.html',
  styleUrls: ['./ordem-de-servico-formulario.component.css']
})
export class OrdemDeServicoFormularioComponent implements OnInit {


  public formularioOrdemDeServico!: FormGroup;
  @Input() public nomeDaAcao = 'Editar';
  @Input() public ordemDeServicoEditavel!: OrdemDeServico;
  @Output() public fecharModalEventEmiter: EventEmitter<boolean> = new EventEmitter<boolean>();

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
    this.fecharModalEventEmiter.emit(false);
  }

  public salvar() {

  }
}
