import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

 
  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }


  clickProduct(id: number): any{
    console.log('producto: ');
    console.log(id);
  }
}
