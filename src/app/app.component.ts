import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `
    <h1>Angular Router</h1>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    //a标签上的RouterLink指令让路由器控制a元素
    //a标签上的routerLinkActive指令帮用户外观区分出当前选中的“活动”路由，与之关联的routerLink被激活时路由器会把CSS类的active添加到这个元素
    //添加锚标签Heroes，点击后导航到HeroesComponent组件
    //RouterOutlets是来自路由库的组件，路由器会在<router-outlet>标签中显示视图


})
export class AppComponent { }