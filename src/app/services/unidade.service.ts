import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUnidade } from '../models/iunidade.model';
import { environment } from 'src/environments/environment';
import { GeracaoService } from './geracao.service';

@Injectable({
  providedIn: 'root'
})
export class UnidadeService {
  cEntidade: string = environment.URL_API_REST + 'unidades';

  unidadeEditavel: any;
  constructor(private http: HttpClient) { }

  devolveUnidades(idUsuario: string): Observable<IUnidade[]>{
    return this.http.get<IUnidade[]>(this.cEntidade + '?idUsuario=' + idUsuario);
  }

  devolveUnidadesAtivas(idUsuario: string): Observable<IUnidade[]>{
    return this.http.get<IUnidade[]>(this.cEntidade + '?status=true&idUsuario=' + idUsuario);
  }

  atualizaUnidade(unidade: IUnidade): Observable<IUnidade> {
    return this.http.put<IUnidade>(this.cEntidade + "/" + unidade.id,unidade);
  }

  cadastraUnidade(unidade: IUnidade): Observable<IUnidade>{
    unidade.id = this.geraIDUnidade();
    return this.http.post<IUnidade>(this.cEntidade,unidade);
  }

  geraIDUnidade(): string {
    return String(Math.round((Math.random() * (9999999999 - 1)) + 1));
  }

  removerUnidade(idUnidade: string): Observable<unknown> {
    return this.http.delete<IUnidade>(this.cEntidade + "/" + idUnidade);
  }
}
