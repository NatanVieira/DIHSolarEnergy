import { Component, OnInit } from '@angular/core';
import { SessaoLocalService } from 'src/app/services/sessao-local.service';
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
