import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';// 配置路由

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from 'app/heroes.component';
import { HeroService } from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([//forRoot（）因为是在根部提供配置好的路由器，且此方法提供了路由需要的路由服务提供商和指令，并基于当URL初始化导航
      {//指向英雄组件列表
        path: 'heroes',//路由用于匹配浏览器地址栏的地址
        component: HeroesComponent,//导航到此路由时路由器需要创建的组件
      }
    ])
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}