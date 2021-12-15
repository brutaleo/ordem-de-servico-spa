import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PaginaNaoEncontradaComponent} from "./pagina-nao-encontrada/pagina-nao-encontrada.component";
import {OrdemDeServicoComponent} from "./ordem-de-servico/ordem-de-servico.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ordem', component: OrdemDeServicoComponent},
  {path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
