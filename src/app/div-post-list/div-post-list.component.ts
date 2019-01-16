import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-div-post-list',
  templateUrl: './div-post-list.component.html',
  styleUrls: ['./div-post-list.component.scss']
})
export class DivPostListComponent implements OnInit {
public  posts:  Array<object> = [];

  constructor() { }

  ngOnInit() {
  }

}
