import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList: Product[] = [];
  
  constructor(private service: ApiService, private router: Router, private cartservice: CartService) { }

  ngOnInit(): void {
    this.fetchProductList();
  }

  fetchProductList() {
    this.service.get().subscribe(
      (data: Product[]) => {
        this.productList = data.map(product => ({
          ...product,
          quantity: 1,
          total: product.price
        }));
      },
      (error) => {
        console.error('Error fetching product list:', error);
      }
    );
  }

  addtocart(item: Product) {
    this.cartservice.addtocart(item);
  }
  order(id:number){
    this.router.navigate(['form',id]);
  }
}
