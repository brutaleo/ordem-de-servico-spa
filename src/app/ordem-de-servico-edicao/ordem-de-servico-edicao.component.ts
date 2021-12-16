import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {OrdemDeServico} from "../modelo/OrdemDeServico";

@Component({
  selector: 'app-ordem-de-servico-edicao',
  templateUrl: './ordem-de-servico-edicao.component.html',
  styleUrls: ['./ordem-de-servico-edicao.component.css']
})
export class OrdemDeServicoEdicaoComponent implements OnInit {

  public nomeDaAcao = 'Editar';
  public ordemDEServico!: OrdemDeServico;


  constructor(
    private dialogRef: MatDialogRef<OrdemDeServicoEdicaoComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) {
    if (dialogData.ordemDeServicoEditavel != null) {
      this.ordemDEServico = dialogData.ordemDeServicoEditavel;
    }

    if (dialogData.nomeDaAcao !=null){
      this.nomeDaAcao = dialogData.nomeDaAcao;
    }
  }

  public fecharJanelaModal($event: any) {
    if ($event != null) this.dialogRef.close($event);
  }

  ngOnInit(): void {
  }

}
