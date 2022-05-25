import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'dih-cadastro-unidade',
  templateUrl: './cadastro-unidade.component.html',
  styleUrls: ['./cadastro-unidade.component.scss']
})
export class CadastroUnidadeComponent implements OnInit {
  titulo:string = 'Cadastro de Unidade';
  constructor() { }

  ngOnInit(): void {
  }

}
