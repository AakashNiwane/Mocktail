import { Component, OnInit } from '@angular/core';
import { APP_DOMAIN_URL } from '../constants/constants';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dataURL = APP_DOMAIN_URL + 'getDrinksForCategory?category=';
  allCategorizedDrinks: string | undefined;

  constructor(private http: HttpService) {}

  ngOnInit(): void {}

  getCategoryDrinks(category: string) {
    this.http.get(this.dataURL + category).subscribe((data: any) => {
      this.allCategorizedDrinks = JSON.stringify(data);
    });
  }
}
