import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faChartPie, faBookOpen, faGear, faClose } from '@fortawesome/free-solid-svg-icons';
import { SessaoLocalService } from 'src/app/services/sessao-local.service';
import { UsuarioService } from 'src/app/services/usuario.service';
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
  userName: string = '';
  constructor(private route: Router, private sessaoLocalService: SessaoLocalService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.userName = this.usuarioService.userNameLogado;
  }

  public logout(){
    this.usuarioService.zeraInfoUsuarioLogado();
    this.usuarioService.apagaIDUsuarioLocalStorage();
    this.route.navigate(['/login']);
  }
}
