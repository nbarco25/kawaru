import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 54000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/camiseta.png',
      title: 'Hoodie',
      price: 85000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 70000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/camiseta.png',
      title: 'Hoodie',
      price: 45000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 70000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '7',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 34000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '8',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];

  constructor() {  }

  getAllProducts(): Product[]{
    return this.products;
  }

  getProduct(id: string): Product{
    return this.products.find(item => id === item.id);
  }
}
