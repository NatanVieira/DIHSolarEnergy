import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { IGeracao } from 'src/app/models/igeracao.model';
import { GeracaoService } from 'src/app/services/geracao.service';
import { UnidadeService } from 'src/app/services/unidade.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'dih-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit {
  listaGeracao :      IGeracao[] = [];
  listaEnergiaGerada: number[]   = [];
  listaMeses:         string[]   = [];
  idUsuario = environment.idUsuario;
  
  constructor(private geracaoService: GeracaoService, private unidadeService: UnidadeService) { }

  ngOnInit(): void {
    
  }

  lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: this.listaEnergiaGerada,
        label: 'Consumo (kW)',
        backgroundColor: '#EC6500',
        borderColor: '#EC6500',
        pointBackgroundColor: '#EC6500',
        pointHoverBackgroundColor: '#EC6500',
        pointHoverBorderColor: '#EC6500',
      }],
      labels: this.listaMeses,
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
          color: 'black',
          font: {
            family: 'KGBlankSpace'
          }
        },
        title: {
          text: '*Últimos 12 meses',
          align: 'end',
          display: true,
          color: 'black',
          font: {
            family: 'KGBlankSpace'
          }
        },
      },
      'y-axis-0':
        {
          ticks: {
            color: 'black',
            font: {
              family: 'KGBlankSpace'
            }
          }
        }
    },
    plugins: {
      legend: {
        labels:{
          font: {
            family: 'KGBlankSpace',
          },
          color: 'black'
        }
      }
    }
  };
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
}
