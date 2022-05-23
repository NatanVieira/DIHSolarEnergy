import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dih-geracao',
  templateUrl: './geracao.component.html',
  styleUrls: ['./geracao.component.scss']
})
export class GeracaoComponent implements OnInit {
  totalGeracao: number = 1;
  data: string = '';
  unidade: string = ''
  unidades: string[] = ['unidade 1','unidade 2', 'unidade 3', 'unidade 4', 'unidade 5'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
