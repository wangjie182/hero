import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';

import { slideInDownAnimation } from '../animations'
import { Hero, HeroService } from './hero.service';

@Component({
  // selector: 'hero-detail',
  template: `
    <h2>HEROES</h2>
    <div *ngIf="hero$ | async as hero">
      <h3>{{hero.name}} details!</h3>
      <div>
        <label>id: </label>{{hero.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" 
          placeholder="name"/>
      </div>
      <p>
        <button (click)="gotoHeroes(hero)">Back</button>
      </p>
    </div>
  `,
  //route.snapshot提供了路由参数的初始值，可通过它直接访问参数
  animations: [ slideInDownAnimation ]
})
export class HeroDetailComponent implements OnInit{
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  hero$: Observable<Hero>;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ){}
  ngOnInit(){
    this.hero$ = this.route.paramMap
      .switchMap ((params: ParamMap ) => 
        this.service.getHero(params.get('id')))
  }

  gotoHeroes(hero: Hero) {
    let heroId = hero ? hero.id : null;
    this.router.navigate(['/heroes',{ id: heroId, foo: 'foo'}])
  }
}
