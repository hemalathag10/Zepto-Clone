import { Component } from '@angular/core';
import { CommonModule} from "@angular/common";

@Component({
  selector: 'app-category-nav-bar',
  imports: [CommonModule],
  templateUrl: './category-nav-bar.html',
  styleUrl: './category-nav-bar.css',
})
export class CategoryNavBar {
  categories : any = [
    {name : "ALL" , icon : "images/logo.png"},
    {name : "FRUITS" , icon : "images/logo.png"},
    {name : "VEGETABLES" , icon : "images/logo.png"},
    {name : "DAIRY" , icon : "images/logo.png"},
    {name : "MEAT" , icon : "images/logo.png"}
  ]

}
