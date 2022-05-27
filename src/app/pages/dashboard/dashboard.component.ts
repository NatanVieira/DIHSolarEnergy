import { Component, OnInit } from '@angular/core';
import { SessaoLocalService } from 'src/app/services/sessao-local.service';
@Component({
  selector: 'dih-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  titulo:string = 'Dashboard';
  constructor() { }

  ngOnInit(): void {
  }

}
