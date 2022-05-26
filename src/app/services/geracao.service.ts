import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IGeracao } from '../models/igeracao.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeracaoService {
  private cEntidade: string = environment.URL_API_REST + 'geracao';

  constructor(private http: HttpClient) { }

  public devolveGeracaoPorUnidade (idUnidade: string): Observable<IGeracao[]> {
    return this.http.get<IGeracao[]>(this.cEntidade + '?idUnidade=' + idUnidade);
  }

  public devolveGeracoes () : Observable<IGeracao[]> {
    return this.http.get<IGeracao[]>(this.cEntidade);
  }

  public cadastraGeracao(geracao: IGeracao): Observable<IGeracao> {
    geracao.id = this.retornaIDGeracao();
    geracao.ano = Number(geracao.data.substring(0,4));
    geracao.mes = Number(geracao.data.substring(5,7));
    geracao.nomeMes = this.descobreNomeMes(geracao.mes);
    return this.http.post<IGeracao>(this.cEntidade,geracao);
  }

  public removerGeracao(idUnidade: string): Observable<unknown> {
    return this.http.delete<IGeracao>(this.cEntidade + "?idUnidade=" + idUnidade);
  }

  private retornaIDGeracao(): string {
    return String(Math.round((Math.random() * (9999999999 - 1)) + 1));
  }

  private descobreNomeMes(mes: number): string {
    switch(mes){
      case 1:
        return 'Jan';
      case 2:
        return 'Fev';
      case 3:
        return 'Mar';
      case 4:
        return 'Abr';
      case 5:
        return 'Mai';
      case 6:
        return 'Jun';
      case 7:
        return 'Jul';
      case 8:
        return 'Ago';
      case 9:
        return 'Set';
      case 10:
        return 'Out';
      case 11:
        return 'Nov';
      case 12:
        return 'Dez';
      default:
        return 'Jan';
    }
  }

}
