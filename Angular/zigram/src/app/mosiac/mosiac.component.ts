import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { APP_DOMAIN_URL } from '../constants/constants';
import { HttpService } from '../services/http.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-mosiac',
  templateUrl: './mosiac.component.html',
  styleUrls: ['./mosiac.component.css'],
})
export class MosiacComponent implements OnInit {
  @Input() allCategorizedDrinks: any;

  temp: any;
  temp2: any;
  tmpbck: any;
  itemData: any;
  //btnsearch Model
  searchDrink: string = '';
  showModal: boolean = false;
  displayAlertForCart: boolean = false;

  addToCartURL = APP_DOMAIN_URL + 'saveToCart';
  getFullDrinkDetailURL = APP_DOMAIN_URL + 'getFullDrinkDetail?id=';
  cartCount: any;

  constructor(private http: HttpService, private shared: SharedService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.allCategorizedDrinks.currentValue) {
      // console.log(changes.allCategorizedDrinks.currentValue);
      this.temp = JSON.parse(changes.allCategorizedDrinks.currentValue);
      this.temp2 = this.temp.drinks;
      this.tmpbck = this.temp.drinks;
    }
  }

  ngOnInit(): void {}

  getDrinkDetails(item: any) {
    this.showModal = true;
    this.http
      .get(this.getFullDrinkDetailURL + item.idDrink)
      .subscribe((data: any) => {
        // console.log(data);
        this.showModal = true;
        this.itemData = data;
      });
  }

  addToCart(item: any) {
    // console.log(item.strDrink + ' added to cart');
    this.http.post(this.addToCartURL, item).subscribe((data) => {
      // console.log('Added to Cart');
      this.shared.setCartCount(1);
      this.displayAlertForCart = true;
      setInterval(() => {
        this.displayAlertForCart = false;
      }, 4000);
    });
  }

  searchDrinkBtn() {
    if (this.temp2 != undefined && this.temp2.length > 0) {
      this.temp2.filter((item: any) => {
        if (this.searchDrink == '' || undefined) {
          this.temp2 = this.tmpbck;
        } else {
          this.temp2 = this.temp2.filter((item: any) => {
            if (
              item.strDrink
                .toLowerCase()
                .includes(this.searchDrink.toLowerCase())
            ) {
              return item;
            }
          });
        }
      });
    }
  }
}
