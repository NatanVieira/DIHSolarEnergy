import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUnidade } from '../models/iunidade.model';
import { SessaoLocalService } from './sessao-local.service';

@Injectable({
  providedIn: 'root'
})
export class UnidadeService {
  private cEntidade: string = '';

  public unidadeEditavel: any;
  constructor(private http: HttpClient, private sessaoLocalService: SessaoLocalService) { 
    this.cEntidade = this.sessaoLocalService.URL_API_REST + 'unidades';
  }

  public devolveUnidades(idUsuario: string): Observable<IUnidade[]>{
    return this.http.get<IUnidade[]>(this.cEntidade + '?idUsuario=' + idUsuario);
  }

  public devolveUnidadesAtivas(idUsuario: string): Observable<IUnidade[]>{
    return this.http.get<IUnidade[]>(this.cEntidade + '?status=true&idUsuario=' + idUsuario);
  }

  public atualizaUnidade(unidade: IUnidade): Observable<IUnidade> {
    return this.http.put<IUnidade>(this.cEntidade + "/" + unidade.id,unidade);
  }

  public cadastraUnidade(unidade: IUnidade): Observable<IUnidade>{
    unidade.id = this.geraIDUnidade();
    return this.http.post<IUnidade>(this.cEntidade,unidade);
  }

  public removerUnidade(idUnidade: string): Observable<unknown> {
    return this.http.delete<IUnidade>(this.cEntidade + "/" + idUnidade);
  }

  private geraIDUnidade(): string {
    return String(Math.round((Math.random() * (9999999999 - 1)) + 1));
  }

}
