import { Component, OnInit } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faCancel } from '@fortawesome/free-solid-svg-icons';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'dih-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss']
})
export class UnidadesComponent implements OnInit {
  faPencil = faPencil;
  faCancel = faCancel;
  faRemove = faRemove;
  faStar = faStar;
  
  listaUnidades: any[] =  [
    {id: 1,
     apelido: 'Teste1',
     local: 'Rua 1',
     marca: 'Marca 1',
     modelo: '1W'},
    {id: 2,
    apelido: 'Teste2',
    local: 'Rua 2',
    marca: 'Marca 2',
    modelo: '2W'},
    {id: 3,
      apelido: 'Teste3',
      local: 'Rua 3',
      marca: 'Marca 3',
      modelo: '3W'},
    {id: 4,
      apelido: 'Teste4',
      local: 'Rua 4',
      marca: 'Marca 4',
      modelo: '4W'},
    {id: 5,
      apelido: 'Teste5',
      local: 'Rua 5',
      marca: 'Marca 5',
      modelo: '5W'},
    {id: 6,
      apelido: 'Teste6',
      local: 'Rua 6',
      marca: 'Marca 6',
      modelo: '6W'},
    {id: 7,
      apelido: 'Teste7',
      local: 'Rua 7',
      marca: 'Marca 7',
      modelo: '7W'},
    {id: 8,
      apelido: 'Teste8',
      local: 'Rua 8',
      marca: 'Marca 8',
      modelo: '8W'}, 
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
