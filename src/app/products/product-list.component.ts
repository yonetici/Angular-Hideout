import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = true;
  listFilter = 'ca';
  products: IProduct[] = [
    {
      productId : 2,
      productName : 'Garden Cart',
      productCode : 'GDN-003',
      releaseDate : 'March 18, 2020',
      description : '15 gallon capacity rolling garden gallon',
      price : 32.99,
      starRating : 4.2,
      imageUrl : 'assets/images/garden_cart.png'
    },
    {
      productId : 5,
      productName : 'Hammer',
      productCode : 'HMR-033',
      releaseDate : 'Jun 28, 2020',
      description : 'Hammer but not MC Hammer',
      price : 18.77,
      starRating : 4.7,
      imageUrl : 'assets/images/hammer.png'
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log(('Ng On INIT'))
  }

}
