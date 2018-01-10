import { Component, Input } from '@angular/core';
import { Hero } from 'app/hero';

// import { Router, ActivateRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operstor/switchMap';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { HeroService } from 'app/hero.service';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div>
        <label>id: </label>{{hero.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" 
          placeholder="name"/>
      </div>
    </div>
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: HeroService
    ){}
    ngOnInit(){
      let id = this.route.snapshot.paraMap.get('id');

      this.hero$ = this.service.getHero(id);
    }
    gotoHeroes() {
      let heroId = hero ? hero.id : null;
      this.router.navigate(['/heroes',{ id: heroId, foo: 'foo'}])
    }
  `
  //route.snapshot提供了路由参数的初始值，可通过它直接访问参数
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
