import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'security';
  name: string = '';
  password: string = '';

  constructor(private route:Router,private service:ApiService) {}
   login(): void {
    let data:any ={};
    data.name= this.name;
    data.password= this.password;  
    this.service.login(data)
      .subscribe(
        (response) => {
          console.log('Login successful', response);
          alert("Login Successfully")
          this.route.navigate(['product']);
        },
        (error) => {
          console.error('Login failed', error);
        }
      );
   }
      //this.route.navigate(['']);
  

  // login(): void {
  //   const data = {
  //     username: this.username,
  //     password: this.password
  //   };
  
  //   this.service.login(data)
  //     .subscribe(
  //       (response) => {
  //         console.log('Login successful', response);
  //         // Redirect or perform actions upon successful login
  //       },
  //       (error) => {
  //         console.error('Login failed', error);
  //         if (error && error.error && error.error.message) {
  //           // Display a specific error message to the user
  //           // For instance, error.error.message contains "Invalid username or password"
  //           // Show an appropriate error message on the UI
  //         }
  //       }
  //     );
  // }  
  

  

}
