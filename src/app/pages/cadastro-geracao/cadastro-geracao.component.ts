import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'dih-cadastro-geracao',
  templateUrl: './cadastro-geracao.component.html',
  styleUrls: ['./cadastro-geracao.component.scss']
})
export class CadastroGeracaoComponent implements OnInit {
  titulo:string = 'Cadastro de Geração';
  constructor() { }

  ngOnInit(): void {
  }

}
