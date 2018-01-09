import { Component , OnInit } from "@angular/core";

import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    //指向新的模板文件
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];//创建一个hero数组属性
    constructor(private heroService: HeroService){}//在构造函数中注入HeroService,并保存其于一个私有的heroService字段中
    ngOnInit(): void {//在Angular的ngOnInit生命周期钩子里调动服务来获取英雄数据
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));//用Array.slice方法提取四个英雄（2~5）
    }
}