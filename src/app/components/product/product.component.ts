import { Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {

  @Input() product: Product;
  @Output() ProductClicked: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('1. Constructor');
  }

  agregarCarrito(): any{
    alert('producto agregado al carrito');
    this.ProductClicked.emit(this.product.id);
  }


  ngOnInit(): void {
    // Hacer llamadas a servicios de datos (api rest)
    console.log('3. ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log('2. ngOnChanges');
    console.log(changes);
  }

}
