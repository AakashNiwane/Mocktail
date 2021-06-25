import { Component, OnInit } from '@angular/core';
import { APP_DOMAIN_URL } from '../constants/constants';
import { HttpService } from '../services/http.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartItemsURL = APP_DOMAIN_URL + 'getCartItems';
  cartCount: number = 0;

  constructor(private http: HttpService, private shared: SharedService) {}

  ngOnInit(): void {
    this.http.get(this.cartItemsURL).subscribe((data: any) => {
      // this.cartCount = data.length;
      //storing the cartCount to localstorage
      window.localStorage.setItem('cartCount', '' + data.length);
      this.cartCount = data.length;
    });

    this.shared.cartCountSS.subscribe((data) => {
      this.cartCount = data;
    });
  }
}
