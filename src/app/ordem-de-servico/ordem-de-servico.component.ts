import {Component, OnInit} from '@angular/core';
import {OrdemDeServico} from "../modelo/OrdemDeServico";
import {MatDialog} from "@angular/material/dialog";
import {OrdemDeServicoEdicaoComponent} from "../ordem-de-servico-edicao/ordem-de-servico-edicao.component";
import {OrdemDeServicoExame} from "../modelo/OrdemDeServicoExame";
import {CaixaDeDialogoComponent} from "../caixa-de-dialogo/caixa-de-dialogo.component";
import {OrdemDeServicoService} from "../services/ordem-de-servico.service";

export const ORDENS_DATA = [
  {
    id: '1',
    convenio: 'XPTO',
    medico: 'MD. House',
    paciente: 'Leonardo',
    postoColeta: 'Posto1',
    dataDeCadastro: '14/12/2021',
    dataDeAtualizacao: '14/12/2021',
    protocolo: 'ABCDEFGH'
  },
  {
    id: '2',
    convenio: 'XPTO Plus',
    medico: 'MD. House',
    paciente: 'Thais',
    postoColeta: 'Posto2',
    dataDeCadastro: '15/12/2021',
    dataDeAtualizacao: '14/12/2021',
    protocolo: 'HGFEDCBA'
  }
];

@Component({
  selector: 'app-ordem-de-servico',
  templateUrl: './ordem-de-servico.component.html',
  styleUrls: ['./ordem-de-servico.component.css']
})
export class OrdemDeServicoComponent implements OnInit {
  public dataSource: OrdemDeServico[] = [];
  //public dataSource: ({ protocolo: string; postoColeta: string; paciente: string; medico: string; convenio: string; dataDeCadastro: string; id: string; dataDeAtualizacao: string })[] = ORDENS_DATA;
  public displayedColumns: string[] = ['id', 'convenio', 'medico', 'paciente', 'postoColeta', 'dataDeCadastro', 'protocolo', 'acoes'];

  constructor(private dialog: MatDialog, private ordemDeServicoService: OrdemDeServicoService) {
  }

  ngOnInit(): void {
    this.carregaTodosAsOrdensDeServico();
  }

  private carregaTodosAsOrdensDeServico() {
    this.ordemDeServicoService
      .buscarTodasAsOrdensDeServico()
      .subscribe(
        (resposta: OrdemDeServico[]) => {
        this.dataSource = resposta;
        }
      );
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
          //logica de edição
          this.carregaTodosAsOrdensDeServico();
        }
      });

  }

  public deletaOrdemDeServico(ordemDeServico: OrdemDeServico) {
    this.dialog
      .open(CaixaDeDialogoComponent,
        {
          disableClose: true,
          data: {
            msg: 'Está ação irá apagar a ordem de serviço. Deseja realmente prosseguir?',
            labelBotaoEsquerdo: 'Não',
            labelBotaoDireito: 'Sim'
          }
        })
      .afterClosed()
      .subscribe(resposta => {
        if (resposta) {
          //logica de deleção
          this.carregaTodosAsOrdensDeServico();
        }
      });
  }

  public gerarProtocolo(ordemDeServico: OrdemDeServico) {

  }

  public adicionarExames(ordemDeServicoExame: OrdemDeServicoExame) {

  }
}
