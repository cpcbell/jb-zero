import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss']
})
export class AddMessageComponent implements OnInit {
  //messageForm = FormGroup;
  //messageForm = 
  message: any = {};
  posts: any = {};

  constructor(private  apiService:  ApiService,
    private formBuilder: FormBuilder
  ){ 
    //this.messageForm = this.createFormGroup();
    //this.messageForm = 
  }

  ngOnInit() {
    this.buildForm();
    this.getPost();
  }

  public buildForm(){
    /** 
    this.messageForm = new FormGroup({
      textMessage: new FormControl(),
    });
    */
  }
  
  public getPost(){
    this.apiService.getPosts().subscribe((data:  Array<object>) => {
        this.posts  = data;
        console.log(data);
    });
  }

  public createPost(post){
    this.apiService.createPost(post).subscribe((response) => {
      this.getPost();
      console.log(response);
    });
  }

  onSubmit(f: NgForm) {
    console.log(f);
    let post = {'title':this.message.text,'author':this.message.text};
    this.createPost(post);
  }

}
