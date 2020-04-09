import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent implements OnInit {
  // Con input, puedo recibit el heroe desde afuera, del padre
  @Input()
  heroe: any = {};
  @Input()
  idx: number;
  // Nos permite emitir un evento, en nuestro caso va a ser el id seleccionado del heroe hace el padre.
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    // Inicializamos el EventEmitter
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {}

  verHeroe() {
    // Emite un evento para enviar el index seleccionado
    this.heroeSeleccionado.emit(this.idx);
  }
}
