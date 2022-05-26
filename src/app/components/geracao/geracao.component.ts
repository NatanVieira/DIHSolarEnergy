import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGeracao } from 'src/app/models/igeracao.model';
import { IUnidade } from 'src/app/models/iunidade.model';
import { GeracaoService } from 'src/app/services/geracao.service';
import { UnidadeService } from 'src/app/services/unidade.service';
import { environment } from 'src/environments/environment';

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
  constructor(private unidadeService: UnidadeService, private geracaoService: GeracaoService, private router: Router) { }

  ngOnInit(): void {
    this.mostraAlerta = environment.cadastroAtualizacao;
    setTimeout (function() {environment.cadastroAtualizacao = 0}, 3000);
    this.unidadeService.devolveUnidadesAtivas(environment.idUsuario).subscribe((unidades) => {
      this.listaUnidades = unidades;
    },
    (error?) => {environment.cadastroAtualizacao = 3;
                 this.ngOnInit();})
  }

  public cadastrarGeracao() {
    this.geracaoService.cadastraGeracao(this.geracao).subscribe((res) => {
      environment.cadastroAtualizacao = 1;
      this.router.navigate(['/dashboard']);
    },(error?) => {environment.cadastroAtualizacao = 2;
                   this.ngOnInit()});
  }
}
