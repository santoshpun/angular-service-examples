import { EcommerceService } from './ecommerce.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css'],
  providers: [EcommerceService]
})
export class EcommerceComponent implements OnInit {

  products: Product[];

  constructor(private ecommerceService: EcommerceService) { }

  ngOnInit() {
  }

  getProducts(){
    this.products = this.ecommerceService.getAll();
  }

}
