import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  counter = 1

  increment(){
    this.counter+=1

    return this.counter
  }

  decrement(){
    this.counter-=1

    return this.counter
  }
}
