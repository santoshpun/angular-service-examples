import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  productService: ProductService;

  constructor() { }

  ngOnInit() {
    this.productService = new ProductService();
  }

  getProducts(): void {
    this.products = this.productService.getAll();
  }

}
