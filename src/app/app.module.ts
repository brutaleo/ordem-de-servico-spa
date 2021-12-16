import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdemDeServicoComponent } from './ordem-de-servico/ordem-de-servico.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "./material.module";
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import {RouterModule} from "@angular/router";
import { CaixaDeDialogoComponent } from './caixa-de-dialogo/caixa-de-dialogo.component';


@NgModule({
  declarations: [
    AppComponent,
    OrdemDeServicoComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent,
    CaixaDeDialogoComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
