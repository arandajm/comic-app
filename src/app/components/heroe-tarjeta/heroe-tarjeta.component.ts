import { Component, OnInit, Input } from '@angular/core';
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
  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Alternative to go to ohter route!
  goToHeroe() {
    this.router.navigate(['/heroe', this.idx]);
  }
}
