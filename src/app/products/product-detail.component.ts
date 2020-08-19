import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute} from '@angular/router';

@Component({
//  selector: 'pm-product-detail', Routing ile göstereceğimiz için selector'a gerek yok
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
  }

}
