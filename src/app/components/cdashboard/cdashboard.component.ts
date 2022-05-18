import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'dih-cdashboard',
  templateUrl: './cdashboard.component.html',
  styleUrls: ['./cdashboard.component.scss']
})
export class CDashboardComponent implements OnInit {
  totalUnidades:number = 30;
  unidadesAtivas: number = 20;
  unidadesInativas: number = 10;
  mediaConsumo: number = 300;
  
  constructor() { }

  ngOnInit(): void {
  }

}
