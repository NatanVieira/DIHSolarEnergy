import { Component } from '@angular/core';
import { SessaoLocalService } from './services/sessao-local.service';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'dih-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DIHSolarEnergy';

  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.atualizaIDUsuario();
  }
}
