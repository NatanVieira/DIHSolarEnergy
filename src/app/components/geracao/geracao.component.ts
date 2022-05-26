import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGeracao } from 'src/app/models/igeracao.model';
import { IUnidade } from 'src/app/models/iunidade.model';
import { GeracaoService } from 'src/app/services/geracao.service';
import { UnidadeService } from 'src/app/services/unidade.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dih-geracao',
  templateUrl: './geracao.component.html',
  styleUrls: ['./geracao.component.scss']
})
export class GeracaoComponent implements OnInit {
  listaUnidades: IUnidade[] = [];

  geracao: IGeracao = {
    id: '',
    idUnidade: '',
    energiaGerada: 0,
    mes: 0,
    ano: 0,
    nomeMes: '',
    data: ''
  }
  constructor(private unidadeService: UnidadeService, private geracaoService: GeracaoService, private router: Router) { }

  ngOnInit(): void {
    this.unidadeService.devolveUnidadesAtivas(environment.idUsuario).subscribe((unidades) => {
      this.listaUnidades = unidades;
    })
  }

  public cadastrarGeracao() {
    this.geracaoService.cadastraGeracao(this.geracao).subscribe((res) => {
      this.router.navigate(['/dashboard']);
    })
  }
}
