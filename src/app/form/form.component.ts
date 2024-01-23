import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Form } from '../form';
import { ApiService } from '../service/api.service';
import { Product } from '../product';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  productId: number;
  product: Product;
  orderForm: FormGroup;
  submitted: boolean;
  submited: boolean;

  id:number;

  

  constructor(private formBuilder: FormBuilder,private router:Router, private service:ApiService,private route:ActivatedRoute) {}

  ngOnInit() {
    // const productId = 1;

    // // Call the getProductById method
    // this.service.getProductById(productId)
    //   .subscribe((data: Product) => {
    //     this.product = data;
    //   });



    this.orderForm = this.formBuilder.group({
      name: ['', Validators.required],
      quantity: [null, [Validators.required, Validators.min(1)]],
      size: ['', Validators.required],
      color: ['', Validators.required],
      address: ['', Validators.required],
      payment: ['', Validators.required]
    });

    // this.route.params.subscribe(params => {
    //   const productId = +params['id'];
    //   this.service.getProductById(productId).subscribe(
    //     (data:Product) => {
    //       this.product = data;
    //     },
    //     (error) => {
    //       console.error('Error occurred while fetching product:', error);
    //     }
    //   );
    // });

    this.id=this.route.snapshot.params['id'];

    this.getById();
  }

  getById(){

    this.service.getProductById(this.id).subscribe(
          (data:Product) => {
            this.product = data;
          },
          (error) => {
            console.error('Error occurred while fetching product:', error);
          }
        );
      



  }

  onSubmit() {
    const ss = this.orderForm.value as Form;
    console.log(ss);
  
    this.service.orderform(ss).subscribe(
      (res) => {
        console.log(res);
        alert("Register Successful");
        this.router.navigate(['product']);
      },
      (error) => {
        console.error('Error occurred:', error);
        alert("Error occurred while place order");
      }
    );
  }
  goBack(){
    this.router.navigate(['product'])
  }
}

