import { Component, Input } from '@angular/core';
import { Hero } from './hero';

import { slideInDownAnimation } from './animations';
import { HostBinding } from '@angular/core';

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
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
  //设置为true是因为只关心：enter和：leave两个状态
  @HostBinding(@routeAnimation) routeAnimation = true;
  //指定了组建的外观：block和位置：absolute
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
}
