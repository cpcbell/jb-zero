import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss']
})
export class AddMessageComponent implements OnInit {
  messageForm: FormGroup;
  message: any = {};
  data: any = {};
  posts: any = {};
  submitted: boolean;

  constructor(private  apiService:  ApiService,
    private formBuilder: FormBuilder
  ){}
  ngOnInit() {
    this.buildForm();
    this.getPost();
  }

  get f() { return this.messageForm.controls; }

  public buildForm(){
    this.messageForm = this.formBuilder.group({
      message: ['', Validators.required], 
    },{});
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
  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.messageForm.invalid) {
            return;
    }
    //console.log(f);
    let post = {'title':this.data.message,'author':this.data.message};
    this.createPost(post);
    this.data.message = '';
  }
}
