import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent {

  productId!: string | null
  product: any = {}

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id')
    })

    this.loadproduct()
  }

  loadproduct() {
    fetch(`https://fakestoreapi.com/products/${this.productId}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json().then((data) => {
      this.product = data
    }))

  }

}
