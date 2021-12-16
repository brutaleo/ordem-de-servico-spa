import { Component, OnInit } from '@angular/core';
import {OrdemDeServico} from "../modelo/OrdemDeServico";
import {MatDialog} from "@angular/material/dialog";
import {OrdemDeServicoEdicaoComponent} from "../ordem-de-servico-edicao/ordem-de-servico-edicao.component";

@Component({
  selector: 'app-ordem-de-servico',
  templateUrl: './ordem-de-servico.component.html',
  styleUrls: ['./ordem-de-servico.component.css']
})
export class OrdemDeServicoComponent implements OnInit {
  public dataSource: OrdemDeServico[] = [];
  public displayedColumns: string[] = ['id', 'convenio', 'medico', 'paciente', 'postoColeta', 'dataDeCadastro', 'acoes'];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  private carregaTodosAsOrdensDeServico() {

  }

  public adicionarNovaOrdemDeServico() {

  }

  public editaOrdemDeServico(ordemDeServico: OrdemDeServico) {
    this.dialog
      .open(OrdemDeServicoEdicaoComponent,
        {
          disableClose: true,
          data: {ordemDeServicoEditavel: ordemDeServico, nomeDaAcao: 'Editar'}
        }
        )
      .afterClosed()
      .subscribe(reposta => {
        if (reposta) {
          this.carregaTodosAsOrdensDeServico();
        }
      });

  }

  public deletaOrdemDeServico(ordemDeServico: OrdemDeServico) {


  }
}
