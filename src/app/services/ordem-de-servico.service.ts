import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrdemDeServico} from "../modelo/OrdemDeServico";
import {environment} from "../../environments/environment";

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class OrdemDeServicoService {

  constructor(private httpClient: HttpClient) { }

  public buscarTodasAsOrdensDeServico(): Observable<OrdemDeServico[]> {
    return this.httpClient.get<OrdemDeServico[]>(`${API}/ordens`);
  }
}
