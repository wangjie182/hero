import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';// 配置路由

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { HeroesModule } from './heroes/heroes.module';

import { CrisisListComponent } from './crisis-list.component';
// import { HeroListComponent } from './heroes/hero-list.component'; 
import { PageNotFoundComponent } from './not-found.component';

// const appRoutes: Routes = [
//   {path: 'crisis-center', component:CrisisListComponent},//path不可以以斜杠开头，路由器会解析和构建最终的URL
//   // {path: 'hero/:id', component:HeroDetailComponent},//:id是路由单数的令牌（token）
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     // data: { title: 'Heroes List' }//date属性用来存放每个具体路由有关的任意信息，该数据可以被任何一个激活路由访问
//   },
//   {
//     path: '',//空路径（''）表示应用的默认路径，URL为空时访问
//     redirectTo: '/heroes',//重定向到这里/heroes，并显示HeroListComponent
//     pathMatch: 'full'//路由器只有在完整的URL等于''时才选择HeroListComponent组件
//   },
//   { path: '**', component: PageNotFoundComponent }//** 表示一个通配符，当所请求的URL不匹配前面定义的路由表中的任何路径时会被选择，可用于显示404或自动重定向等
// ];
@NgModule({
  imports: [//路由配置顺序很重要，路由器会接受第一个匹配上导航所要求的那个路径
    BrowserModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule,
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true }

          // [//forRoot（）因为是在根部提供配置好的路由器，且此方法提供了路由需要的路由服务提供商和指令，并基于当URL初始化导航
          //       {//指向英雄组件列表
          //         path: 'heroes',//路由用于匹配浏览器地址栏的地址
          //         component: HeroesComponent,//导航到此路由时路由器需要创建的组件
          //       },
          //       {//配置仪表盘路由
          //         path: 'dashboard',
          //         component: DashboardComponent
          //       },
          //       {//添加重定向路由
          //         path: '',
          //         redirectTo: '/dashboard',
          //         pathMatch: 'full'
          //       },
          //       {//配置带参数的路由
          //         path: 'detail/:id',//路径中（：）表示：id是一个占位符，当导航到这个HeroDetailComponent组件时它将被填入一个特定英雄的id
          //         component: HeroDetailComponent
          //       },
          //     ]

    // ),
   
  ],
  declarations: [
    AppComponent,
    // HeroDetailComponent,
    // HeroesComponent,
    // DashboardComponent,
    // HeroListComponent,
    CrisisListComponent,
    PageNotFoundComponent,
  ],
  // providers: [
  //   HeroService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule {
}