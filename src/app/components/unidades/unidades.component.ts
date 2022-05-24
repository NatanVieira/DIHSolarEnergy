import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faCancel } from '@fortawesome/free-solid-svg-icons';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IUnidade } from 'src/app/models/iunidade.model';
import { UnidadeService } from 'src/app/services/unidade.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'dih-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss']
})
export class UnidadesComponent implements OnInit {

  faPencil = faPencil;
  faCancel = faCancel;
  faRemove = faRemove;
  faStar = faStar;
  
  listaUnidades: IUnidade[] = [];

  constructor(private unidadeService: UnidadeService, private router: Router) { }

  ngOnInit(): void {
    this.unidadeService.devolveUnidadesAtivas(environment.idUsuario).subscribe((unidades: IUnidade[]) => {
      this.listaUnidades = unidades;
      this.unidadeService.unidadeEditavel = {};
    })
  }

  removerUnidade(idUnidade: string) {
    let unidadeGeradora: any;
    unidadeGeradora = this.listaUnidades.find(unidade => unidade.id = idUnidade);
    if(unidadeGeradora){
      this.unidadeService.removerUnidade(unidadeGeradora).subscribe((res) => {
        this.router.navigate(['/unidades']);
      })
    }
  }

  editarUnidade(idUnidade: string){
    this.unidadeService.unidadeEditavel = this.listaUnidades.find(unidade => unidade.id == idUnidade);
    this.router.navigate(['/cadastro-unidade']);
  }

}
