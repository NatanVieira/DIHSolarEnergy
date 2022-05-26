import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { IGeracao } from 'src/app/models/igeracao.model';
import { IUnidade } from 'src/app/models/iunidade.model';
import { GeracaoService } from 'src/app/services/geracao.service';
import { UnidadeService } from 'src/app/services/unidade.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'dih-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit {
  listaEnergiaGerada: number[]   = [];
  listaMeses:         string[]   = [];
  mostraAlerta: number = 0;

  private mesInicial: number = 0;
  private mesFinal: number = 0;
  private anoInicial: number = 0;
  private anoFinal: number = 0;


  lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Consumo (kW)',
        backgroundColor: environment.bgColor,
        borderColor: environment.bgColor,
        pointBackgroundColor: environment.bgColor,
        pointHoverBackgroundColor: environment.bgColor,
        pointHoverBorderColor: environment.bgColor,
      }],
      labels: [],
    }
  lineChartType: ChartType = 'line';

  lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.0
      }
    },
    scales: {
      x: {
        ticks : {
          color: environment.fgColor,
          font: {
            family: environment.fonteFam
          }
        },
        title: {
          text: '*Últimos 12 meses',
          align: 'end',
          display: true,
          color: environment.fgColor,
          font: {
            family: environment.fonteFam
          }
        },
      },
      'y-axis-0':
        {
          ticks: {
            color: environment.fgColor,
            font: {
              family: environment.fonteFam
            }
          }
        }
    },
    plugins: {
      legend: {
        labels:{
          font: {
            family: environment.fonteFam
          },
          color: environment.fgColor
        }
      }
    }
  };

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor(private geracaoService: GeracaoService, private unidadeService: UnidadeService) { }

  ngOnInit(): void {
    this.mostraAlerta = environment.cadastroAtualizacao;
    setTimeout (function() {environment.cadastroAtualizacao = 0}, 3000)
    this.unidadeService.devolveUnidadesAtivas(environment.idUsuario).subscribe((unidades: IUnidade[]) => {
      this.geracaoService.devolveGeracoes().subscribe((geracoes: IGeracao[]) => {
        let listaGeracaoUnidades: IGeracao[] = []
        unidades.forEach((unidade) => {
          listaGeracaoUnidades.push(...geracoes.filter(geracao => geracao.idUnidade == unidade.id));
        })
        this.atualizaListasDeEnergiaEMeses(listaGeracaoUnidades);
      },
      (error?) => {environment.cadastroAtualizacao = 2;
                   this.ngOnInit();})
    },
    (error?) => {environment.cadastroAtualizacao = 2;
                 this.ngOnInit();})
  }

  private atualizaListasDeEnergiaEMeses(listaGeracaoUnidades: IGeracao[]): void{
    this.defineDatasDeBusca();
    this.populaListasDeEnergiaEMeses(listaGeracaoUnidades);
    this.ajustaListasDeEnergiaEMeses();
    this.atualizaDadosGrafico();
  }

  private atualizaDadosGrafico(): void {
    this.lineChartData.datasets[0].data = this.listaEnergiaGerada;
    this.lineChartData.labels = this.listaMeses;
    this.chart?.update();
  }
  
  private populaListasDeEnergiaEMeses(listaGeracaoUnidades: IGeracao[]): void{
    let arrAuxGeracao: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    let arrAuxMeses: string[] = ['','','','','','','','','','','',''];
    listaGeracaoUnidades.forEach((geracao) => {
      if((geracao.mes <= this.mesFinal && geracao.ano == this.anoFinal) || (geracao.mes >= this.mesInicial && geracao.ano == this.anoInicial)){
        let indexArr: number = this.descobreIndexArr(geracao.mes, geracao.ano);
        arrAuxGeracao[indexArr] = arrAuxGeracao[indexArr] + Number(geracao.energiaGerada);
        arrAuxMeses[indexArr] = String(indexArr + 1) + ' - ' + geracao.nomeMes;
      }
    });
    this.listaEnergiaGerada = arrAuxGeracao;
    this.listaMeses = arrAuxMeses;
  }

  private ajustaListasDeEnergiaEMeses(): void {
    let arrExclusao: number[] = [];
    let contExclusao: number = 0;
    if(this.listaEnergiaGerada.length > 12)
      this.listaEnergiaGerada.pop();
    if(this.listaMeses.length > 12)
      this.listaMeses.pop();
    contExclusao = 0;
    for(let i: number = 0; i < 12; i++){
      if (this.listaEnergiaGerada[i] == 0 || this.listaMeses[i] == ''){
        arrExclusao[contExclusao] = i;
        contExclusao++;
      }
    }
    for(let i: number = 0; i < arrExclusao.length; i++){
      this.listaEnergiaGerada.splice(arrExclusao[i] - i, 1);
      this.listaMeses.splice(arrExclusao[i] - i, 1);
    }
  }

  private descobreIndexArr(mes: number, ano: number): number {
    switch(mes){
      case this.mesFinal:
      case this.mesInicial:
        return ano == this.anoFinal ? 0 : ano == this.anoInicial ? 11 : 12;
      case this.mesFinal - 1:
      case this.mesInicial + 1:
        return ano == this.anoFinal ? 1 : ano == this.anoInicial ? 10 : 12;
      case this.mesFinal - 2:
      case this.mesInicial + 2:
        return ano == this.anoFinal ? 2 : ano == this.anoInicial ? 9 : 12;
      case this.mesFinal - 3:
      case this.mesInicial + 3:
        return ano == this.anoFinal ? 3 : ano == this.anoInicial ? 8 : 12;
      case this.mesFinal - 4:
      case this.mesInicial + 4:
        return ano == this.anoFinal ? 4 : ano == this.anoInicial ? 7 : 12;
      case this.mesFinal - 5:
      case this.mesInicial + 5:
        return ano == this.anoFinal ? 5 : ano == this.anoInicial ? 6 : 12;
      case this.mesFinal - 6:
      case this.mesInicial + 6:
        return ano == this.anoFinal ? 6 : ano == this.anoInicial ? 5 : 12;
      case this.mesFinal - 7:
      case this.mesInicial + 7:
        return ano == this.anoFinal ? 7 : ano == this.anoInicial ? 4 : 12;
      case this.mesFinal - 8:
      case this.mesInicial + 8:
        return ano == this.anoFinal ? 8 : ano == this.anoInicial ? 3 : 12;
      case this.mesFinal - 9:
      case this.mesInicial + 9:
        return ano == this.anoFinal ? 9 : ano == this.anoInicial ? 2 : 12;
      case this.mesFinal - 10:
      case this.mesInicial + 10:
        return ano == this.anoFinal ? 10 : ano == this.anoInicial ? 1 : 12;
      case this.mesFinal - 11:
      case this.mesInicial + 11:
        return ano == this.anoFinal ? 11 : ano == this.anoInicial ? 0 : 12;
    }
    return 12;
  }

  private defineDatasDeBusca(): void{
    this.mesFinal = this.descobreMes();
    this.anoFinal = this.descobreAno();
    this.mesInicial = this.mesFinal != 12 ? this.mesFinal + 1: 1;
    this.anoInicial = this.mesFinal != 12 ? this.anoFinal - 1: this.anoFinal;
  }

  private descobreMes(): number {
    let data = new Date();
    return data.getMonth() + 1;
  }

  private descobreAno(): number {
    let data = new Date();
    return data.getFullYear();
  }
  
}
