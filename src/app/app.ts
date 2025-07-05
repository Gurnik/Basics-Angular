import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Post } from './post/post';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Post, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'basics';

  protected name = 'daniel kandalaft';
  protected imgURL = 'https://picsum.photos/id/237/500/500';
  images = [
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/237/500/500',
  ];
  protected currentDate = new Date();
  protected cost = 2000;
  protected temperature = 25.3;
  protected pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large',
  };
  blueClass = false;
  fontSize = 16;

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
  }
}
