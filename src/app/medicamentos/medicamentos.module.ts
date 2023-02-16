import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicamentosRoutingModule } from './medicamentos-routing.module';
import { MedicamentosFormComponent } from './medicamentos-form/medicamentos-form.component';

import { FormsModule } from '@angular/forms';
import { MedicamentosListaComponent } from './medicamentos-lista/medicamentos-lista.component'

@NgModule({
  declarations: [
    MedicamentosFormComponent,
    MedicamentosListaComponent
  ],
  imports: [
    CommonModule,
    MedicamentosRoutingModule,
    FormsModule
  ],
  exports: [
    MedicamentosFormComponent,
    MedicamentosListaComponent
  ]
})
export class MedicamentosModule { }
