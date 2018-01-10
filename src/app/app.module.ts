import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { HeroesModule } from './heroes/heroes.module';

import { CrisisListComponent } from './crisis-list.component';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  imports: [//路由配置顺序很重要，路由器会接受第一个匹配上导航所要求的那个路径
    BrowserModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule,
   
  ],
  declarations: [
    AppComponent, 
    CrisisListComponent,
    PageNotFoundComponent,
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}