import { LoggerService } from './../services/logger.service';
import { Injectable } from '@angular/core';
import { Product } from '../product/product';

@Injectable()
export class EcommerceService {
  
  constructor(private loggerService: LoggerService) { }

  public getAll() {
    let products: Product[];

    products = [
      new Product(1, 'Memory Card', 500),
      new Product(2, 'Pen Drive', 750),
      new Product(3, 'Power Bank', 100)
    ];

    this.loggerService.log(products);

    return products;
  }
}
