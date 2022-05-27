import { Component, OnInit } from '@angular/core';
import { SessaoLocalService } from 'src/app/services/sessao-local.service';
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
