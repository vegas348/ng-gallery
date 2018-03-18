import { Component } from '@angular/core';
import { Product } from './models/products';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product: Product;
  // tslint:disable-next-line:max-line-length
  constructor(){
  this.product = new Product('wimad2016', 'red wine', './resources/images/wines/red-wine/1234', ['export', 'sales', 'wine', 'red wine'], 6.50);
}

}