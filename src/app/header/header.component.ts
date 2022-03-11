import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Productos',
        icon: 'fa fa-shopping-bag',
        routerLink: '/products'
      },
      {
        label: 'Quiénes somos',
        icon: 'fa fa-info',
        routerLink: '/about-us'
      }
    ];
  }

}
