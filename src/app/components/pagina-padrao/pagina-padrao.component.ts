import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'dih-pagina-padrao',
  templateUrl: './pagina-padrao.component.html',
  styleUrls: ['./pagina-padrao.component.scss']
})
export class PaginaPadraoComponent implements OnInit {
  @Input() titulo: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
