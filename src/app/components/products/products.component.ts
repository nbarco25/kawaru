import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }


  clickProduct(id: number): any{
    console.log('producto: ');
    console.log(id);
  }
}
