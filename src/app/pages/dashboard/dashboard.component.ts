import { Component, OnInit } from '@angular/core';
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
