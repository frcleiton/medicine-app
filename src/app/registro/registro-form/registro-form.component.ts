import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/medicamentos/medicamento';
import { MedicamentosService } from '../../medicamentos.service'
import { Registro } from '../registro'
import { RegistroService } from '../../registro.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent implements OnInit {

  medicamentos: Medicamento[] = [];
  registro: Registro;
  success: boolean = false;
  errors: String[];

  constructor( 
    private service: MedicamentosService,
    private registroService: RegistroService
  ) { 
    this.registro = new Registro();
    this.errors = [];
  }

  ngOnInit(): void {
    this.service
      .getMedicamentos()
      .subscribe( resposta => this.medicamentos = resposta );
  }

  onSubmit(): void {

    this.registroService
      .salvar( this.registro )
      .subscribe( response => {
        console.log(response);
        this.success = true;
        this.errors = [];
        //this.registro = response;
        this.registro = new Registro();
      }, errorResponse => {
        this.errors = errorResponse.error.errors;
        this.success = false; 
        console.log(this.errors);
      }
    )

  }

}
