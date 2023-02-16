import { Injectable } from '@angular/core';
import { Medicamento } from './medicamentos/medicamento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  apiURL: string = environment.apiURLBase + '/api/medicamentos';

  constructor( private http: HttpClient ) { 
    
  }

  salvar( medicamento: Medicamento) : Observable<Medicamento> {
    /*
    const tokenString = localStorage.getItem('access_token')
    let headers
    if ( tokenString ) {
      const token = JSON.parse(tokenString)
      
      headers = {
        'Authorization' : 'Bearer ' + token.access_token
      }
    
    }
    */
    return this.http.post<Medicamento>( `${this.apiURL}`, medicamento)
  }

  getMedicamentos() : Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(`${this.apiURL}`);
  }

  getMedicamentoById(id: number) : Observable<Medicamento>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(medic: Medicamento) : Observable<Medicamento>{
    return this.http.delete<any>(`${this.apiURL}/${medic.id}`);
  }

}
