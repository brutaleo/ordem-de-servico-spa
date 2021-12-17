import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {OrdemDeServico} from "../modelo/OrdemDeServico";
import {Medico} from "../modelo/Medico";
import {Paciente} from "../modelo/Paciente";
import {PostoColeta} from "../modelo/PostoColeta";

@Component({
  selector: 'app-ordem-de-servico-formulario',
  templateUrl: './ordem-de-servico-formulario.component.html',
  styleUrls: ['./ordem-de-servico-formulario.component.css']
})
export class OrdemDeServicoFormularioComponent implements OnInit {

  @Input() public nomeDaAcao = 'Editar';
  @Input() public ordemDeServicoEditavel!: OrdemDeServico;
  @Output() public fecharModalEventEmiter: EventEmitter<boolean> = new EventEmitter<boolean>();

  public medicos: Medico[] =[];
  public pacientes: Paciente[] =[];
  public postoColetas: PostoColeta[] =[];
  public formularioOrdemDeServico!: FormGroup;

  @ViewChild(FormGroupDirective) public formularioOrdemDeServicoDirective!: FormGroupDirective;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  private criarFormulario(){
    this.formularioOrdemDeServico = this.formBuilder.group({
      convenio: [this.ordemDeServicoEditavel != null ? this.ordemDeServicoEditavel.convenio : false, Validators.required],
      medico: [this.ordemDeServicoEditavel != null ? this.ordemDeServicoEditavel.medico : false, Validators.required],
      paciente: [this.ordemDeServicoEditavel != null ? this.ordemDeServicoEditavel.paciente : false, Validators.required],
      postoColeta: [this.ordemDeServicoEditavel != null ? this.ordemDeServicoEditavel.postoColeta : false, Validators.required],
      dataDeCadastro: [this.ordemDeServicoEditavel != null ? this.ordemDeServicoEditavel.dataDeCadastro : false, Validators.required],

    });
  }

  public cancelar() {
    this.fecharModalEventEmiter.emit(false);
  }

  public salvar() {
    this.fecharModalEventEmiter.emit(true);

  }

  private limpaFormulario() {
    this.formularioOrdemDeServico.reset();
    this.formularioOrdemDeServicoDirective.resetForm();
  }
}
