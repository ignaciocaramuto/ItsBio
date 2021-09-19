import { Component, OnInit } from '@angular/core';

import { Product } from './../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: Product[] = [
    {
      id: '1',
      title: 'Pasta de avellanas',
      image: 'assets/images/Pasta_de_avellanas.jpeg',
      price: 400,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: '2',
      title: 'Pasta de maní dulce',
      image: 'assets/images/Pasta_de_mani_dulce.jpeg',
      price: 360,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: '3',
      title: 'Pasta de maní natural',
      image: 'assets/images/Pasta_de_mani_natural.jpeg',
      price: 350,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: '4',
      title: 'Pasta de maní proteica',
      image: 'assets/images/Pasta_de_mani_proteica.jpeg',
      price: 380,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  addProductToCart(id: number){
    console.log(id)
  }
}
