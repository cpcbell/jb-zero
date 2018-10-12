import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss']
})
export class AddMessageComponent implements OnInit {
  message: any = {};

  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
  }

  public createPost(post){
    this.apiService.createPost(post).subscribe((response) => {
      console.log(response);
    });
  }

  onSubmit() {
    console.log(this.message);
    let post = {'title':this.message.date,'author':this.message.text};
    this.createPost(post);
  }

}
