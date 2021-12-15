import { Component, OnInit } from '@angular/core';
import {OrdemDeServico} from "../modelo/OrdemDeServico";

@Component({
  selector: 'app-ordem-de-servico',
  templateUrl: './ordem-de-servico.component.html',
  styleUrls: ['./ordem-de-servico.component.css']
})
export class OrdemDeServicoComponent implements OnInit {
  public dataSource: OrdemDeServico[] = [];
  public displayedColumns: string[] = ['id', 'convenio', 'medico', 'paciente', 'postoColeta', 'dataDeCadastro', 'acoes'];
  constructor() { }

  ngOnInit(): void {
  }

  adicionarNovaOrdemDeServico() {

  }

  editaOrdemDeServico(ordemDeServico: OrdemDeServico) {

  }

  deletaOrdemDeServico(ordemDeServico: OrdemDeServico) {

  }
}
