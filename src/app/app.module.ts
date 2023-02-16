import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';

import 'jquery';
import { HomeComponent } from './home/home.component';
import { MedicamentosModule } from './medicamentos/medicamentos.module';
import { MedicamentosService } from './medicamentos.service'

import { RegistroModule } from './registro/registro.module'
import { RegistroService } from './registro.service';
import { LoginComponent } from './login/login.component'

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './auth.service';
import { TokenInterceptor } from './token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    MedicamentosModule,
    RegistroModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    MedicamentosService,
    RegistroService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
