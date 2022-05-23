import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'dih-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit {
  lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40, 55, 75, 90, 105, 15],
        label: 'Consumo (kW)',
        backgroundColor: '#EC6500',
        borderColor: '#EC6500',
        pointBackgroundColor: '#EC6500',
        pointHoverBackgroundColor: '#EC6500',
        pointHoverBorderColor: '#EC6500',
      }],
      labels: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
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
          color: 'black', //
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
  constructor() { }

  ngOnInit(): void {
  }

}
