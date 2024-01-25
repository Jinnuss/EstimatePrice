import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/Countries/countries.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  listCountries: any;
  price = 0;
  weight = 0
  result = 0;
  show = false;
  err = false;
  valid = false;
  detail = false
  valueCountry: any;
  constructor(
    private countries: CountriesService
  ) { }
  ngOnInit() {
    this.listCountries = this.countries.getDataCountries();
  };
  shortName = '';
  priceForm: FormGroup = new FormGroup({
    price: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.min(1)]),
    weight: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.min(0.1)]),
    length: new FormControl({ value: '', disabled: true }),
    width: new FormControl({ value: '', disabled: true }),
    height: new FormControl({ value: '', disabled: true }),
    selection: new FormControl({ value: '', disabled: true }, Validators.required),
  }
  );
  activeCountry(country: any) {
    this.show = false;
    this.valueCountry = country;
    this.shortName = country.shortName;
    for (let countryItem of this.listCountries) {
      if (countryItem == country) {
        countryItem.active = !country.active;
        this.valid = countryItem.active;
        continue;
      } else {
        countryItem.active = false;
      }
    }
    for (let item in this.priceForm.controls) {
      const control = this.priceForm.get(item);
      if (control && this.valid) {
        control.enable();
        continue;
      } else {
        control?.disable();
      }
    }
  }
  setValue(controlName: string) {
    const control = this.priceForm.get(controlName);
    if (controlName == 'price' && control && control.value < 0) {
      control.setValue(1);
    }
    if (controlName == 'weight' && control && control.value < 0) {
      control.setValue(0.1);
    }
  }
  estimateResult() {
    if (this.priceForm.valid == false) {
      this.err = true;
      this.show = false;
    } else {
      this.err = false;
      this.show = true;
    }
    this.price = this.priceForm.value.price * this.valueCountry.moneyPrice;
    this.weight = this.priceForm.value.weight * this.valueCountry.moneyWeight;
    this.result = this.price + this.weight + 20000;
  }
  showDetail() {
    this.detail = !this.detail;
  }
}
