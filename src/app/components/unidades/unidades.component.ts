import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faCancel } from '@fortawesome/free-solid-svg-icons';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IUnidade } from 'src/app/models/iunidade.model';
import { SessaoLocalService } from 'src/app/services/sessao-local.service';
import { UnidadeService } from 'src/app/services/unidade.service';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'dih-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss']
})
export class UnidadesComponent implements OnInit {
  faPencil = faPencil;
  faCancel = faCancel;
  faRemove = faRemove;
  faStar   = faStar;
  
  mostraAlerta: number = 0;
  listaUnidades: IUnidade[] = [];

  constructor(private unidadeService: UnidadeService, private router: Router, private usuarioService: UsuarioService, private sessaoLocalService: SessaoLocalService) { }

  ngOnInit(): void {
    this.unidadeService.devolveUnidadesAtivas(this.usuarioService.idUsuarioLogado).subscribe((unidades: IUnidade[]) => {
      this.listaUnidades = unidades;
      this.unidadeService.unidadeEditavel = {};
      this.mostraAlerta = this.sessaoLocalService.cadastroAtualizacao;
      this.sessaoLocalService.zeraCadastroAtualizacao();
    },
    (error?) => {this.sessaoLocalService.cadastroAtualizacao = 2;
                 this.ngOnInit();})
  }

  public editarUnidade(idUnidade: string){
    this.unidadeService.unidadeEditavel = this.listaUnidades.find(unidade => unidade.id == idUnidade);
    this.router.navigate(['/cadastro-unidade']);
  }

  public removerUnidade(idUnidade: string) {
    let unidadeGeradora: any;
    unidadeGeradora = this.listaUnidades.find(unidade => unidade.id == idUnidade);
    if(unidadeGeradora){
      this.unidadeService.removerUnidade(unidadeGeradora.id).subscribe((res) => {
        this.sessaoLocalService.cadastroAtualizacao = 3
        this.ngOnInit();
      },
      (error?) => {this.sessaoLocalService.cadastroAtualizacao = 4;
                   this.ngOnInit()})
    }
  }

}
