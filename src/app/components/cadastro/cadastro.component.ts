import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUnidade } from 'src/app/models/iunidade.model';
import { UnidadeService } from 'src/app/services/unidade.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'dih-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  @Input() unidadeGeradora: IUnidade = {
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
        this.unidadeService.unidadeEditavel = {};
        this.router.navigate(['/unidades']);
      });
    }
    else{
      this.unidadeGeradora.idUsuario = environment.idUsuario;
      this.unidadeService.cadastraUnidade(this.unidadeGeradora).subscribe((unidade) => {
        this.router.navigate(['/unidades']);
      });
    }
  }

}
