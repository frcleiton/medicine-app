import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from './registro/registro';
import { environment } from '../environments/environment';
import { RegistroBusca } from './registro/registro-lista/registroBusca';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  apiURL: string = environment.apiURLBase + '/api/registro';

  constructor(private http: HttpClient) { }

  salvar(registro: Registro) : Observable<Registro>{
    return this.http.post<Registro>(`${this.apiURL}`, registro)
  }

  buscar(nome: string) : Observable<RegistroBusca[]>{
    const httpParams = new HttpParams()
      .set("nome", nome);
    const url = this.apiURL + "?" + httpParams.toString();
    console.log(url);
    return this.http.get<any>(url);
  }
  
}
