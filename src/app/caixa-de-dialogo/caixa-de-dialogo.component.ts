import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-caixa-de-dialogo',
  templateUrl: './caixa-de-dialogo.component.html',
  styleUrls: ['./caixa-de-dialogo.component.css']
})
export class CaixaDeDialogoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CaixaDeDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    if (data.msg != null) {
      this.dialogMsg = data.msg;
    }

    if (data.labelBotaoEsquerdo != null) {
      this.labelBotaoEsquerdo = data.labelBotaoEsquerdo;
    }

    if (data.labelBotaoDireito != null) {
      this.labelBotaoDireito = data.labelBotaoDireito;
    }
  }
  public dialogMsg = 'Deseja continuar com esta ação?';
  public labelBotaoEsquerdo = 'Cancelar';
  public labelBotaoDireito = 'Ok';

  ngOnInit(): void {
  }

  public cancelar() {
    this.dialogRef.close(false);
  }

  public confirmar() {
    this.dialogRef.close(true);
  }
}
