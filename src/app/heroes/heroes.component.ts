import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes: Hero[] = [];

  constructor(private service: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  selectedHero?: Hero;

  getHeroes(): void {
    this.heroes = this.service.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
