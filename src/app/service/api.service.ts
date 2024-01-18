import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import { Product } from '../product';
import { Observable } from 'rxjs';
import { Security } from '../security';
import { Login } from '../login';
import { Form } from '../form';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080/addtocarts';
  constructor(private http: HttpClient) { }
  get(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/get`); 
}
register(secure:Security):Observable<Security>{
  return this.http.post<Security>(`${this.baseUrl}/save`,secure);
}
login(secure:Login):Observable<Login>{
  return this.http.post<Login>(`${this.baseUrl}/login`,secure);
}
orderform(forms:Form):Observable<Form>{
  return this.http.post<Form>(`${this.baseUrl}/formdetails`,forms)
  console.log(forms);
}
getProductById(id: number): Observable<Product> {
  return this.http.get<Product>(`${this.baseUrl}/find/${id}`);
}

}