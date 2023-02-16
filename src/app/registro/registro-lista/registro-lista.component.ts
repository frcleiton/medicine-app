import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/registro.service';
import { RegistroBusca } from './registroBusca';

@Component({
  selector: 'app-registro-lista',
  templateUrl: './registro-lista.component.html',
  styleUrls: ['./registro-lista.component.css']
})
export class RegistroListaComponent implements OnInit {

  nome: string;
  lista: RegistroBusca[];
  message: string;

  constructor(
    private service: RegistroService
  ) { 
    this.nome = "";
    this.lista = new Array<RegistroBusca>();
    this.message = "";
  }

  ngOnInit(): void {
  }

  consultar(){
    this.service
      .buscar(this.nome)
      .subscribe(response => {
        this.lista = response;
        this.message = "";
        if ( this.lista.length <= 0 ){
          this.message = "Nenhum registro encontrado.";
        }
      })
  };

}
