import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginError?: boolean;
  modoCadastro?: boolean;
  msgSucesso?: string;
  errors?: String[];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { 
    this.username = '';
    this.password = '';
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("onSubmit")
    console.log(this.username + ':' + this.password)
    this.authService.doLogon(this.username, this.password)
        .subscribe(response => {
          
          console.log(response)
          const access_token = JSON.stringify(response);
          localStorage.setItem('access_token', access_token);
          this.router.navigate(['/home'])
        
        }, errorResponse => {

          console.log(errorResponse)
          this.errors = ['Usuário e/ou senha incorreto']

        })
  }

  onSubmitDireto(){
    console.log("onSubmitDireto");
  }

  setModoCadastroON(event: Event) {
    event.preventDefault();
    this.modoCadastro = true;
  }
  
  setModoCadastroOFF() {
    this.modoCadastro = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
        .salvar(usuario)
        .subscribe( response => {
          this.msgSucesso = "Cadastro realizado com sucesso! Efetue o Login";
          this.loginError = false;
          this.modoCadastro = false;
          this.username = '';
          this.password = '';
          this.errors = [];
        }, errorResponse => {
          this.loginError = true;
          this.msgSucesso = '';
          this.errors = errorResponse.error.errors;
          
        });
  }

}
