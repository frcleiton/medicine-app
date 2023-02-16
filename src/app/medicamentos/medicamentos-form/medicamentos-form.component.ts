import { Component, OnInit } from '@angular/core';

import { Medicamento } from '../medicamento'
import { MedicamentosService } from '../../medicamentos.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medicamentos-form',
  templateUrl: './medicamentos-form.component.html',
  styleUrls: ['./medicamentos-form.component.css']
})
export class MedicamentosFormComponent implements OnInit {

  medicamento: Medicamento
  success: boolean = false;
  errors: String[];
  id!: number;

  constructor( 
    private service : MedicamentosService,
    private router : Router,
    private activatedRoute: ActivatedRoute ) {

    //this.medicamento = service.getMedicamento();
    this.medicamento = new Medicamento();
    this.errors = [];

  }

  ngOnInit(): void {
    let params : Observable<any> = this.activatedRoute.params;
    params.subscribe( urlParms => {
      this.id = urlParms['id'];
      if( this.id ) {
        this.service
          .getMedicamentoById( this.id )
          .subscribe(
            response => this.medicamento = response,
            errorResponse => this.medicamento = new Medicamento()
          )
      }    
    })
  } 
  
  
   /*
   ngOnInit(): void {
    let params = this.activatedRoute.snapshot.params;
    
    if (params["id"]) {
      console.log( params["id"] );
      this.id = params["id"];
      this.service
        .getMedicamentoById(this.id)
        .subscribe(
          response => this.medicamento = response
        );
    }

  }
  */

  onSubmit(){
    
    this.service
      .salvar(this.medicamento)
      .subscribe( response => {
          console.log(response);
          this.success = true;
          this.errors = [];
          this.medicamento = response;
        }, errorResponse => {
          this.errors = errorResponse.error.errors;
          this.success = false; 
          console.log(this.errors);
        }
      )
  
  }

  voltarParaListagem(){
    this.router.navigate(['/medicamentos/lista'])
  }

}
