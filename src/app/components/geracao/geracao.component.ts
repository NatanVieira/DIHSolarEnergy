import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGeracao } from 'src/app/models/igeracao.model';
import { IUnidade } from 'src/app/models/iunidade.model';
import { GeracaoService } from 'src/app/services/geracao.service';
import { SessaoLocalService } from 'src/app/services/sessao-local.service';
import { UnidadeService } from 'src/app/services/unidade.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'dih-geracao',
  templateUrl: './geracao.component.html',
  styleUrls: ['./geracao.component.scss']
})
export class GeracaoComponent implements OnInit {
  listaUnidades: IUnidade[] = [];
  mostraAlerta: number = 0;

  geracao: IGeracao = {
    id: '',
    idUnidade: '',
    energiaGerada: 0,
    mes: 0,
    ano: 0,
    nomeMes: '',
    data: ''
  }
  constructor(private unidadeService: UnidadeService, private geracaoService: GeracaoService, private router: Router, private usuarioService: UsuarioService, private sessaoLocalService: SessaoLocalService) { }

  ngOnInit(): void {
    this.mostraAlerta = this.sessaoLocalService.cadastroAtualizacao;
    this.sessaoLocalService.zeraCadastroAtualizacao();
    this.unidadeService.devolveUnidadesAtivas(this.usuarioService.idUsuarioLogado).subscribe((unidades) => {
      this.listaUnidades = unidades;
    },
    (error?) => {this.sessaoLocalService.cadastroAtualizacao = 3;
                 this.ngOnInit();})
  }

  public cadastrarGeracao() {
    this.geracaoService.cadastraGeracao(this.geracao).subscribe((res) => {
      this.sessaoLocalService.cadastroAtualizacao = 1;
      this.router.navigate(['/dashboard']);
    },(error?) => {this.sessaoLocalService.cadastroAtualizacao = 2;
                   this.ngOnInit()});
  }
}
