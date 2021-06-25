import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private localCartVar!: number;
  private cartCount = new BehaviorSubject<number>(0);
  cartCountSS = this.cartCount.asObservable();

  setCartCount(count: number) {
    this.localCartVar = parseInt(
      window.localStorage.getItem('cartCount') || '0'
    );
    this.localCartVar = this.localCartVar + count;
    window.localStorage.setItem('cartCount', '' + this.localCartVar);
    this.cartCount.next(this.localCartVar);
  }
  constructor() {}
}
