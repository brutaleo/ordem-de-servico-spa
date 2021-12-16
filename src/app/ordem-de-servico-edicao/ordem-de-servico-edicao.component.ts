import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-ordem-de-servico-edicao',
  templateUrl: './ordem-de-servico-edicao.component.html',
  styleUrls: ['./ordem-de-servico-edicao.component.css']
})
export class OrdemDeServicoEdicaoComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<OrdemDeServicoEdicaoComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) { }

  ngOnInit(): void {
  }

}
