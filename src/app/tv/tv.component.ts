import { Component } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
modalProduct:any;
  tvproducts:any[]=[
    {
      image:"assets/tv7.jpg",
      name:"redmi led tv",
      description:"vzzgfgasfdyugdasuydgsaudysagduysaguasgsyu",
      specification:{
        size:"23*45",
        ostype:"android",
        year:"2023"
      }
    }
  ];
tomodal(product:any){
this.modalProduct=product;
console.log(this.modalProduct);

}
}
