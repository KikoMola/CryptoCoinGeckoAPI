import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Coin } from './interfaces/coin';
import { CoinService } from './services/coin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  api: string =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  coins: Coin[] = [];
  titles: string[] = ['#', 'Coin', 'Price', 'Price Change', '24H Volume'];
  searchText: string = '';
  filteredCoints: Coin[] = [];

  constructor(private http: HttpClient, private coinService: CoinService) {}

  ngOnInit() {
    this.coinService.getCoins().subscribe(
      (res) => {
        this.coins = res;
        this.filteredCoints = this.coins;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  searchCoin() {
    this.filteredCoints = this.coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
