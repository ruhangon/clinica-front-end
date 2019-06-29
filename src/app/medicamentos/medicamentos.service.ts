import { Medicamento } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  medicamentosURL = 'http://localhost:8081/medicamentos';

  constructor(private http: HttpClient) { }

  adicionar(medicamento: Medicamento): Promise<any>{
    return this.http.post(this.medicamentosURL, medicamento)
    .toPromise();
  }

    buscarPorCodigo(codigo: number): Promise<Medicamento> {
    return this.http.get<Medicamento>(this.medicamentosURL+'/'+codigo).toPromise();
  }

  
}
