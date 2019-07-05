import { Paciente, Medicamento, Medico } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  pacientesURL = 'http://localhost:8081/pacientes';
  pacientesURLFiltro = this.pacientesURL;

  constructor(
    private http: HttpClient
  ) { }

  
  pesquisar(filtro: any):Promise<any>{
    if(filtro.nome){
      this.pacientesURLFiltro = this.pacientesURL+'/filtro?nome='+filtro.nome;
    }else{
      this.pacientesURLFiltro = this.pacientesURL;
    }
    return this.http.get<any>(this.pacientesURLFiltro).toPromise();
  }

  adicionar(paciente: Paciente): Promise<any>{    
    return this.http.post(this.pacientesURL, paciente)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Paciente> {
    return this.http.get<Paciente>(this.pacientesURL+'/'+codigo).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.pacientesURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  alterar(paciente: Paciente): Promise<any>{
    return this.http.put(this.pacientesURL+'/'+paciente.id, paciente)
    .toPromise();
  }

  
}
