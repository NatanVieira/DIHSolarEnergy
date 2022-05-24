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
  
  idUsuario: string = environment.idUsuario;
  listaUnidades: IUnidade[] = [];
  listaGeracao:  IGeracao[] = [];

  constructor(private unidadeService: UnidadeService, private geracaoService: GeracaoService) { }

  ngOnInit(): void {   
    this.unidadeService.devolveUnidades(this.idUsuario).subscribe((unidades: IUnidade[]) => {
    this.listaUnidades = unidades;
    this.totalUnidades    = this.listaUnidades.length;
    this.unidadesAtivas   = this.listaUnidades.filter(unidade => unidade.status).length;
    this.unidadesInativas = this.listaUnidades.filter(unidade => !unidade.status).length;
    let somaGeracao: number = 0;
    this.listaUnidades.forEach((unidade) => {
      if(unidade.status){
        this.geracaoService.devolveGeracaoPorUnidade(unidade.id).subscribe((geracoes: IGeracao[]) => {
          this.listaGeracao = geracoes;
          this.listaGeracao.forEach((geracao) => {
            somaGeracao += geracao.energiaGerada;
            this.mediaGeracao = somaGeracao / this.unidadesAtivas;
          })
        });
      }
    })
  });
}
}