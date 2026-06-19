import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Homepage } from "./User/homepage/homepage";

@Component({
  selector: 'app-root',
  imports: [ Homepage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('zepto-frontend');
}
