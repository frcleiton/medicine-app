import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../medicamento';
import { MedicamentosService } from '../../medicamentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicamentos-lista',
  templateUrl: './medicamentos-lista.component.html',
  styleUrls: ['./medicamentos-lista.component.css']
})
export class MedicamentosListaComponent implements OnInit {

  medicamentos: Medicamento[] = [];
  medicamentoSelecionado!: Medicamento;
  msgSucesso!: string;
  msgErro!: string;

  constructor( 
    private service: MedicamentosService,
    private router: Router ) { }

  ngOnInit(): void {
    this.service
      .getMedicamentos()
      .subscribe( resposta => this.medicamentos = resposta );
  }

  novoCadastro() {
    this.router.navigate(['/medicamentos/form'])
  }

  preparaDelecao(medicamento: Medicamento) {
    this.medicamentoSelecionado = medicamento;
  }

  delecao(medicamento: Medicamento) {
    this.service
      .deletar( this.medicamentoSelecionado )
      .subscribe( {
          next: (v) => { 
            this.msgSucesso = 'Medicamento deletado com sucesso!'
            this.ngOnInit();
          },
          error: (e) => this.msgErro = 'Erro ao efetuar a delecao!'
      });
  }

}
