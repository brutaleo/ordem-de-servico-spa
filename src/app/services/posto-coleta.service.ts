import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostoColeta} from "../modelo/PostoColeta";

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class PostoColetaService {

  constructor(private httpClient: HttpClient) { }

  public buscarTodosOsPostosDeColeta(): Observable<PostoColeta[]> {
    return this.httpClient.get<PostoColeta[]>(`${API}/aux/postos`);
  }
}
