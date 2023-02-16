import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { MedicamentosFormComponent } from './medicamentos-form/medicamentos-form.component'
import { MedicamentosListaComponent } from './medicamentos-lista/medicamentos-lista.component'

const routes: Routes = [

  { path: 'medicamentos' , component: LayoutComponent, children : [

    { path: 'form' , component: MedicamentosFormComponent  },
    { path: 'form/:id' , component: MedicamentosFormComponent  },
    { path: 'lista', component: MedicamentosListaComponent },
    { path: '', redirectTo : '/medicamentos/lista', pathMatch: 'full' },  

  ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentosRoutingModule { }
