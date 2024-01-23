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
  productList: any;
  public filterCategory:any;
  searchKey:string="";
  constructor(private service: ApiService, private router: Router, private cartservice: CartService) { }

  ngOnInit(): void {
    this.service.get().subscribe(
      (response) => {
        this.productList = response;
        console.log(response);
        this.filterCategory=response;
        this.productList.forEach((a: any) => {
          if(a.category==="women's clothing"||a.category==="mens's clothing"){
            a.category="fashion"
          }
          Object.assign(a, { quantity: 1, total: a.price });
        });
        console.log(this.productList)
});
    this.cartservice.search.subscribe((val:any)=>{
      this.searchKey=val;
    })
  }
    
  addtocart(item: Product) {
    this.cartservice.addtocart(item);
  }
  order(id:number){
    this.router.navigate(['form',id]);
  }
  filter(category:string){
    this.filterCategory=this.productList
    .filter((a:any)=>{
      if(a.category==category ||category==''){
        return a;
      }
    });
      }
}
