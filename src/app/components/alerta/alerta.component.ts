import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dih-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {
  @Input() mensagem: string = '';
  @Input() sucessoOuFalha: number = 0;
  @Input() mostraBtnFecha: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
