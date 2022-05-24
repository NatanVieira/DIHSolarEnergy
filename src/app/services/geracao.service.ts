import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGeracao } from '../models/igeracao.model';

@Injectable({
  providedIn: 'root'
})
export class GeracaoService {

  constructor(private http: HttpClient) { }

  devolveGeracoes(idUnidade: string): Observable<IGeracao[]>{
    return this.http.get<IGeracao[]>('http://localhost:3000/geracao?idUnidade=' + idUnidade);
  }
}
