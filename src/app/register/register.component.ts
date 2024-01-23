import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Security } from '../security';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private service:ApiService,private route:Router){}
  contactForm=new FormGroup({
    name:new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
    password:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    mobile:new FormControl("",[Validators.required])
  })
  get name(){
    return this.contactForm.get('name')?.get('name')
  }
  get email(){
    return this.contactForm.get('email')?.get('email')
  }
  get password(){
    return this.contactForm.get('password')?.get('password')
  }
  get mobile(){
    return this.contactForm.get('mobile')?.get('mobile')
  }

  onSubmit() {
    const ss = this.contactForm.value as unknown as Security;
    console.log(ss);
  
    this.service.register(ss).subscribe(
      (res) => {
        console.log(res);
        alert("Register Successful");
        this.route.navigate(['login']);
      },
      (error) => {
        console.error('Error occurred:', error);
        alert("Error occurred while adding user"); // Show an error message to the user
        // Handle error-specific logic if needed
      }
    );
  }
}
