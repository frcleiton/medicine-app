import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroFormComponent } from './registro-form/registro-form.component';
import { RegistroListaComponent } from './registro-lista/registro-lista.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    RegistroFormComponent,
    RegistroListaComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    FormsModule,
    RouterModule,
  ], exports: [
    RegistroFormComponent,
    RegistroListaComponent
  ]
})
export class RegistroModule { }
