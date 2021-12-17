import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Paciente} from "../modelo/Paciente";

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private httpClient: HttpClient) { }

  public buscarTodosOsPacientes(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(`${API}/aux/pacientes`);

  }
}
