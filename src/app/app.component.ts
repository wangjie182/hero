import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `
        <h1> {{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>   
            <a routerLink="/heroes">Heroes</a>   
        </nav>
        <router-outlet></router-outlet>
    `
    //添加一个到仪表盘的导航链接
    //添加锚标签Heroes，点击后导航到HeroesComponent组件
})
export class AppComponent {
    title = 'Tour of Heroes';
}