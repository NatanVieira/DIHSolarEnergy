import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dih-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  unidadeGeradora: any = {
      id: 0,
      apelido: 'Teste9',
      local: 'Local 9',
      marca: 'Marca 9',
      modelo: '9W',
      ativo: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
