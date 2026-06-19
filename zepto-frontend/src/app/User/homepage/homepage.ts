import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CategoryNavBar } from "../category-nav-bar/category-nav-bar";

@Component({
  selector: 'app-homepage',
  imports: [Navbar, CategoryNavBar],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {}
