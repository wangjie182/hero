import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()//()括号忘记写会导致很难诊断的错误
//加上@Injectable装饰器可以提高统一性并减少变更
export class HeroService{
    //在此注入依赖
    getHeroes():Promise<Hero[]>{
        return Promise.resolve(HEROES) ;
    } 
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
}