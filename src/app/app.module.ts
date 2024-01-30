import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageComponent } from './image/image.component';
import { EndbarComponent } from './endbar/endbar.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { OnlyNumberDirective } from './only-number.directive';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';
import { ApplianceComponent } from './appliance/appliance.component';
import { SportsComponent } from './sports/sports.component';
import { FashionComponent } from './fashion/fashion.component';
import { BeautyComponent } from './beauty/beauty.component';
import { FurnictureComponent } from './furnicture/furnicture.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageComponent,
    EndbarComponent,
    FormComponent,
    OnlyNumberDirective,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    CartComponent,
    ProductComponent,
    MobileComponent,
    TvComponent,
    ApplianceComponent,
    
    SportsComponent,
         FashionComponent,
         BeautyComponent,
         FurnictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
