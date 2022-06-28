import { Injectable } from '@angular/core';
import { Coin } from '../interfaces/coin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }

  apiUrl: string = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  getCoins() {
    return this.http.get<Coin[]>(this.apiUrl);
  }

}
