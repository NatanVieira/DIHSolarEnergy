import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dih-lista-unidades',
  templateUrl: './lista-unidades.component.html',
  styleUrls: ['./lista-unidades.component.scss']
})
export class ListaUnidadesComponent implements OnInit {
  titulo:string = 'Unidades';
  
  constructor() { }

  ngOnInit(): void {
  }

}
