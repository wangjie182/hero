import { Component, OnInit } from "@angular/core";

import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
    // selector: 'app-root',
    template: `
        <h2> HEROES</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes"
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
    `,
    //a标签上的RouterLink指令让路由器控制a元素
    //a标签上的routerLinkActive指令帮用户外观区分出当前选中的“活动”路由，与之关联的routerLink被激活时路由器会把CSS类的active添加到这个元素
    //添加锚标签Heroes，点击后导航到HeroesComponent组件
    //RouterOutlets是来自路由库的组件，路由器会在<router-outlet>标签中显示视图
    styles: [`
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
export class HeroListComponent implements OnInit{
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService){}

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes); 
    }

    ngOnInit(): void {
        this.getHeroes();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}