import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from './../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() product: Product;
  @Output() productAddCart: EventEmitter<any> = new EventEmitter();

  addCart(){
    console.log('Agregar carrito');
    this.productAddCart.emit(this.product.id);
  }

  openProductDetail(): void {
    console.log(this.product);
  }
}
