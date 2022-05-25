import { Component, OnInit, ViewChild} from '@angular/core';
import { IGeracao } from 'src/app/models/igeracao.model';
import { IUnidade } from 'src/app/models/iunidade.model';
import { GeracaoService } from 'src/app/services/geracao.service';
import { UnidadeService } from 'src/app/services/unidade.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'dih-cdashboard',
  templateUrl: './cdashboard.component.html',
  styleUrls: ['./cdashboard.component.scss']
})
export class CDashboardComponent implements OnInit {
  totalUnidades:    number = 0;
  unidadesAtivas:   number = 0;
  unidadesInativas: number = 0;
  mediaGeracao:     number = 0;

  listaUnidades: IUnidade[] = [];
  listaGeracao:  IGeracao[] = [];

  constructor(private unidadeService: UnidadeService, private geracaoService: GeracaoService) { }

  ngOnInit(): void {   
    this.unidadeService.devolveUnidades(environment.idUsuario).subscribe((unidades: IUnidade[]) => {
    this.listaUnidades = unidades;
    this.totalUnidades    = this.listaUnidades.length;
    this.unidadesAtivas   = this.listaUnidades.filter(unidade => unidade.status).length;
    this.unidadesInativas = this.listaUnidades.filter(unidade => !unidade.status).length;
    let somaGeracao: number = 0;
    let listaUnidadesAtivas: IUnidade[] = [];
    this.unidadeService.devolveUnidadesAtivas(environment.idUsuario).subscribe((unidades: IUnidade[]) => {
      listaUnidadesAtivas = unidades;
      this.geracaoService.devolveGeracoes().subscribe((geracoes: IGeracao[]) => {
        this.listaGeracao = geracoes;
        listaUnidadesAtivas.forEach((unidade) => {
          let listaGeracaoAux: IGeracao[] = [];
          listaGeracaoAux = this.listaGeracao.filter(geracao => geracao.idUnidade === unidade.id);
          listaGeracaoAux.forEach((geracao) => {somaGeracao += geracao.energiaGerada});
        })
        this.mediaGeracao = somaGeracao / listaUnidadesAtivas.length;
      })
    })
  });
}
}