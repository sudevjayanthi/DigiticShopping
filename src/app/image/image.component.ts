import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  constructor(private route:Router){}
  gotoform(){
    this.route.navigate(['form'])
  }

}
