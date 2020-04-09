import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  heroes: Heroe[] = [];
  term: string;
  constructor(
    private _heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.term = params['term'];
      this.heroes = this._heroesService.getHeroesByTerm(this.term);
    });
  }

  VerHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
