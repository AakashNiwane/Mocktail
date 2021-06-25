import { Component, OnInit } from '@angular/core';
import { APP_DOMAIN_URL } from '../constants/constants';
import { HttpService } from '../services/http.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  getCartItemURL = APP_DOMAIN_URL + 'getCartItems';
  deleteItemURL = APP_DOMAIN_URL + 'deleteCartItems?id=';
  cartList: any = [];

  constructor(private http: HttpService, private shared: SharedService) {}

  ngOnInit(): void {
    this.http.get(this.getCartItemURL).subscribe((data: any) => {
      this.cartList = data;
    });
  }

  removeFromCart(item: any) {
    this.shared.setCartCount(-1);
    this.http.delete(this.deleteItemURL + item.idDrink).subscribe((data) => {
      this.cartList = data;
    });
  }
}
