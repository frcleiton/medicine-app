import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { RegistroFormComponent } from './registro-form/registro-form.component';
import { RegistroListaComponent } from './registro-lista/registro-lista.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [

  { path: 'registro', canActivate: [AuthGuard], component: LayoutComponent, children : [

    { path: 'form', component: RegistroFormComponent, canActivate: [AuthGuard]},
    { path: 'lista', component: RegistroListaComponent, canActivate: [AuthGuard]},
    { path: '', redirectTo: '/registro/lista', pathMatch: 'full'}

  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RegistroRoutingModule { }
