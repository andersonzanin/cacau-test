import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];

  selectedOrder: string = 'title';

  get sortedProducts(): any[] {
    return this.products.sort((a: { title: string; category: string; price: number; }, b: { title: any; category: any; price: number; }): number => {
      if (this.selectedOrder === 'title') {
        return a.title.localeCompare(b.title);
      } else if (this.selectedOrder === 'category') {
        return a.category.localeCompare(b.category);
      } else if (this.selectedOrder === 'price') {
        return a.price - b.price;
      }
      return 0;
    });
  }

  ngOnInit() {
    this.loadProducts()
  }

  loadProducts() {

    fetch('https://fakestoreapi.com/products', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json().then((data) => { 
      this.products = data 
    }))

  }

}
