import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faChartPie, faBookOpen, faGear, faClose } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
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
  faClose = faClose;
  userName = environment.userName;
  
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  public logout(){
    environment.idUsuario = '';
    environment.userName = '';
    environment.userLogado = false;
    this.route.navigate(['/login']);
  }

}
