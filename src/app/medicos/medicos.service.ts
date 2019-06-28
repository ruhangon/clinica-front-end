import { Medico } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  medicosURL = 'http://localhost:8081/medicos';

  constructor(private http: HttpClient) { }

  adicionar(medico: Medico): Promise<any>{
    return this.http.post(this.medicosURL, medico)
    .toPromise();
  }

    buscarPorCodigo(codigo: number): Promise<Medico> {
    return this.http.get<Medico>(this.medicosURL+'/'+codigo).toPromise();
  }

  
}
