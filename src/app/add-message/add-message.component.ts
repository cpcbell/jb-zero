import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss']
})
export class AddMessageComponent implements OnInit {
  message: any = {};

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.message);
  }

}