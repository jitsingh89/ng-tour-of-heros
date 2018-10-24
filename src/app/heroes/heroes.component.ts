import { Component, OnInit } from '@angular/core';
// import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero [];
  selectedHero: Hero;

  constructor(private _heroServie : HeroService) { 

  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this._heroServie.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

}
