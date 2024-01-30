import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ImageComponent } from './image/image.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EndbarComponent } from './endbar/endbar.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';
import { ApplianceComponent } from './appliance/appliance.component';
import { SportsComponent } from './sports/sports.component';
import { FashionComponent } from './fashion/fashion.component';
import { BeautyComponent } from './beauty/beauty.component';
import { FurnictureComponent } from './furnicture/furnicture.component';

const routes: Routes = [
  {path:'back',component:ImageComponent},
  {path:"",component:ImageComponent},
  {path:'form/:id',component:FormComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'endbar',component:EndbarComponent},
  {path:'login',component:LoginComponent},
{path:'cart',component:CartComponent},
{path:'product',component:ProductComponent},
{path:'register',component:RegisterComponent},
{path:'mobile',component:MobileComponent},
{path:'tv',component:TvComponent},
{path:'appliance',component:ApplianceComponent},
{path:'sports',component:SportsComponent},
{path:'fashion',component:FashionComponent},
{path:'beauty',component:BeautyComponent},
{path:'furnicture',component:FurnictureComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
