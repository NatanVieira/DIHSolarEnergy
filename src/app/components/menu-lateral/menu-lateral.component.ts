import { Component, OnInit, Input } from '@angular/core';
import { faChartPie, faBookOpen, faGear } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'dih-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {
  @Input() titulo: string = '';
  faChartPie = faChartPie;
  faBookOpen = faBookOpen;
  faGear = faGear;
  constructor() { }

  ngOnInit(): void {
  }

}
