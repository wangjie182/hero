import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  template: `  
    <h1> {{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" 
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)" >
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    <ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
    `,
  //反引号包裹的组件模板能让你把<h1>、<h2>和<div>元素各自放在一行上
  //let hero of heroes:从heroes数组中取出每个英雄，存入一个局部的hero变量，并让它在相应的模板实例中可用
  styles: [`
    h1 {
      color: #369;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 250%;
    }
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [HeroService]  

})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes!';
  heroes : Hero[];
  selectedHero: Hero;

  constructor (private heroService:HeroService){ }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
    ngOnInit(): void {
    this.getHeroes();
  }

  OnSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}

