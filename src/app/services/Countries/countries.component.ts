import { Countries } from '../../countries';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor() { };
  getDataCountries() {
    let arrayCountries: Countries[] = [
      {
        id: 1,
        active: false,
        name: 'Mỹ OREGON',
        shortName: 'US',
        image: '../assets/images/flag_usa.svg',
        moneyPrice: 25000,
        moneyWeight: 210000
      },

      {
        id: 2,
        active: false,
        name: 'Nhật Bản',
        shortName: 'JP',
        image: '../assets/images/flag_japan.svg',
        moneyPrice: 175,
        moneyWeight: 180000
      },
      {
        id: 3,
        active: false,
        name: 'Tuyến Anh',
        shortName: 'UK',
        image: '../assets/images/flag_kingdom.svg',
        moneyPrice: 32413,
        moneyWeight: 220000
      },
      {
        id: 4,
        active: false,
        name: 'Mỹ CALI',
        shortName: 'US_CA',
        image: '../assets/images/flag_usa.svg',
        moneyPrice: 25000,
        moneyWeight: 185000
      },
    ];
    return arrayCountries;
  }
}
