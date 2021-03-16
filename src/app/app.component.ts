import { Component } from '@angular/core';
import {Product} from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
      image: 'assets/images/hoodie.png',
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
      image: 'assets/images/hoodie.png',
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
      image: 'assets/images/hoodie.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];
  title = 'kawaru-store';
  list = ['nata', 'ana', 'tato'];

  addItem(): any{
    this.list.push(this.title);
  }
  deleteItem(index: number): any{
    this.list.splice(index, 1);
  }
  clickProduct(id: number): any{
    console.log('producto: ');
    console.log(id);
  }
}
