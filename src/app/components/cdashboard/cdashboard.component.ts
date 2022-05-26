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

  constructor(private unidadeService: UnidadeService, private geracaoService: GeracaoService) { }

  ngOnInit(): void {   
    this.unidadeService.devolveUnidades(environment.idUsuario).subscribe((unidades: IUnidade[]) => {
    this.totalUnidades    = unidades.length;
    this.unidadesAtivas   = unidades.filter(unidade => unidade.status).length;
    this.unidadesInativas = unidades.filter(unidade => !unidade.status).length;
    this.unidadeService.devolveUnidadesAtivas(environment.idUsuario).subscribe((unidades: IUnidade[]) => {
      this.geracaoService.devolveGeracoes().subscribe((geracoes: IGeracao[]) => {
        this.mediaGeracao = this.calculaMediaGeracao(geracoes, unidades);
        })
      })
    });
  }

  private calculaMediaGeracao(geracoes: IGeracao[], unidades: IUnidade[]): number {
    let somaGeracao: number = 0;
    unidades.forEach((unidade) => {
      let listaGeracaoAux: IGeracao[] = [];
      listaGeracaoAux = geracoes.filter(geracao => geracao.idUnidade === unidade.id);
      listaGeracaoAux.forEach((geracao) => {somaGeracao += geracao.energiaGerada});
      })
    return somaGeracao / unidades.length;
  }
}