import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { RegistroFormComponent } from './registro-form/registro-form.component';
import { RegistroListaComponent } from './registro-lista/registro-lista.component';

const routes: Routes = [

  { path: 'registro', component: LayoutComponent, children : [

    { path: 'form', component: RegistroFormComponent},
    { path: 'lista', component: RegistroListaComponent},
    { path: '', redirectTo: '/registro/lista', pathMatch: 'full'}

  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RegistroRoutingModule { }
