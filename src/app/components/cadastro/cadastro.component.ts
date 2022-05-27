import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUnidade } from 'src/app/models/iunidade.model';
import { SessaoLocalService } from 'src/app/services/sessao-local.service';
import { UnidadeService } from 'src/app/services/unidade.service';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'dih-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  unidadeGeradora: IUnidade = {
    id: '',
    idUsuario: '',
    apelido: '',
    marca: '',
    modelo: '',
    local: '',
    status: true,
  };
  mostrarAlerta: number = 0;

  constructor(private unidadeService: UnidadeService, private router: Router, private usuarioService: UsuarioService, private sessaoLocalService: SessaoLocalService) { }

  ngOnInit(): void {
    this.mostrarAlerta = this.sessaoLocalService.cadastroAtualizacao;
    this.sessaoLocalService.zeraCadastroAtualizacao();
    this.unidadeGeradora.idUsuario = this.usuarioService.idUsuarioLogado;
    if(this.unidadeService.unidadeEditavel !== null && this.unidadeService.unidadeEditavel !== {})
      this.unidadeGeradora = this.unidadeService.unidadeEditavel;
  }

  atualizarUnidade(){
    if(this.unidadeGeradora.id != undefined)
      this.alterarUnidade();
    else
      this.cadastrarUnidade();
  }

  private cadastrarUnidade() {
    this.unidadeGeradora.idUsuario = this.usuarioService.idUsuarioLogado;
    this.unidadeService.cadastraUnidade(this.unidadeGeradora).subscribe((unidade) => {this.atualizaPagina(1)},
                                                                        (error?) => {this.atualizaPagina(2)});
  }

  private alterarUnidade(){
    this.unidadeService.atualizaUnidade(this.unidadeGeradora).subscribe((unidade) => {this.atualizaPagina(1)},
                                                                        (error?) => {this.atualizaPagina(2)});
  }

  private atualizaPagina(opcao: number): void {
    this.sessaoLocalService.cadastroAtualizacao = opcao;
    this.router.navigate(['/unidades']);
  }

}
