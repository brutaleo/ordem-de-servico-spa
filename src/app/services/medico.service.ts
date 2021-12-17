import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Medico} from "../modelo/Medico";

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private httpClient: HttpClient) { }

  public buscarTodosOsMedicos(): Observable<Medico[]> {
    return this.httpClient.get<Medico[]>(`${API}/aux/medicos`);
  }


}
