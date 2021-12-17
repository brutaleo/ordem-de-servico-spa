import {Medico} from "./Medico";
import {Paciente} from "./Paciente";
import {PostoColeta} from "./PostoColeta";

export class OrdemDeServico {

  public id!: number;
  public convenio!: string;
  public protocolo!: string;
  public dataCadastro!: Date;
  public dataDeAtualizacao!: Date;
  public medico!: Medico;
  public paciente!: Paciente;
  public postoColeta!: PostoColeta;

}
