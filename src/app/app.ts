import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Post } from './post/post';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Post],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'basics';

  protected name = 'Luis';
  protected imgURL = 'https://picsum.photos/id/237/500/500';

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
