import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { IUnidade } from 'src/app/models/iunidade.model';
import { UnidadeService } from 'src/app/services/unidade.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'dih-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  unidadeGeradora: IUnidade = {
    id: '',
    idUsuario: environment.idUsuario,
    apelido: '',
    marca: '',
    modelo: '',
    local: '',
    status: true,
  };

  constructor(private unidadeService: UnidadeService, private router: Router) { }

  ngOnInit(): void {
    if(this.unidadeService.unidadeEditavel !== null && this.unidadeService.unidadeEditavel !== {})
      this.unidadeGeradora = this.unidadeService.unidadeEditavel;
  }

  atualizarUnidade(){
    if(this.unidadeGeradora.id !== undefined){
      this.unidadeService.atualizaUnidade(this.unidadeGeradora).subscribe((unidade) => {
        this.atualizaPagina(1);
      });
    }
    else{
      this.unidadeGeradora.idUsuario = environment.idUsuario;
      this.unidadeService.cadastraUnidade(this.unidadeGeradora).subscribe((unidade) => {
        this.atualizaPagina(1);
      });
    }
  }

  private atualizaPagina(opcao: number): void {
    environment.cadastroAtulizacao = opcao;
    this.router.navigate(['/unidades']);
  }

}
