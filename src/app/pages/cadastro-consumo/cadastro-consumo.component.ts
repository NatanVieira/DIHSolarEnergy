import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'dih-cadastro-consumo',
  templateUrl: './cadastro-consumo.component.html',
  styleUrls: ['./cadastro-consumo.component.scss']
})
export class CadastroConsumoComponent implements OnInit {
  titulo:string = 'Cadastro de consumo';
  constructor() { }

  ngOnInit(): void {
  }

}
