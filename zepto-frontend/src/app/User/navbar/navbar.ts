import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {  products : any=['apple','banana','milk','kurkure']
  currentIndex=0;
  ngOnInit(){
setInterval(() => {
  this.currentIndex =
    (this.currentIndex + 1) % this.products.length;

  this.cdr.detectChanges();

  console.log(this.products[this.currentIndex]);
}, 1000);
  }
  constructor(private cdr:ChangeDetectorRef){
 
  }

}
