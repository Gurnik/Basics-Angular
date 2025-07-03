import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('img') postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('constructor() called', this.postImg);
  }

  ngOnInit() {
    console.log('ngOnInit() called', this.postImg);
  }

  ngOnChanges() {
    console.log('ngOnChanges() called');
  }

  ngDoCheck() {
    console.log('ngDoChcek() called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy() called');
  }
}
