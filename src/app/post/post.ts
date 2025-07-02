import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {
  @Input('img') postImg = '';
  @Output() imgSelected = new EventEmitter<string>();
}
