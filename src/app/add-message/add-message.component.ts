import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import {interval} from "rxjs/internal/observable/interval";
import {timer} from "rxjs/internal/observable/timer";
import {startWith, switchMap,concatMap} from "rxjs/operators";
//import {Status} from "./models/status.model";


//form: new FormGroup({'message'});

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss']
})

export class AddMessageComponent implements OnInit {
  //statuses: Status[];
  form: FormGroup;
  message: any = {};
  data: any = {};
  posts: any = [];
  submitted: boolean;
  refresh_interval: number;

  constructor(private  apiService:  ApiService,
    private formBuilder: FormBuilder
  ){}

  public getPost(){
    console.log('GET POST RUNS');
    this.apiService.getPosts().subscribe((data:  Array<object>) => {
        data = this.linkIt(data);
        this.posts  = data;
        // console.log(data);
    });
  }

  public createPost(post){
    this.apiService.createPost(post).subscribe((response) => {
      this.getPost();
      console.log(response);
    });
  }

  ngOnInit() {
    this.buildForm();
    const trigger$ = timer(0, 8500);
    trigger$.subscribe(
      ()=>this.getPost()
    );
  }


  get f() { return this.form.controls; }

  public buildForm(){
    this.form = this.formBuilder.group({
      message: ['', Validators.required], 
    },{});
  }

  public linkIt(data){

    var beg_pat = /(https?\:\/\/\S+)/gm;
    var img_pat = /jpg|png|gif$/gm;
    var e = {};

    var new_data = [];

    data.forEach(e => {
      var new_row = e;
      var scan = e.title;
      var is_http = scan.match(beg_pat);
      /*
      console.log(scan);
      console.log(is_http);
      */
      /*
      Is this shit linkable?
      */
      if(is_http && is_http.length){
        let firstLink = is_http[0];
        /*
        Is this shit an img?
        */
        if( firstLink.match(img_pat) ){
          console.log(firstLink);
          let img = document.createElement('img');
          img.src = firstLink;
          e.img = img
        }
        else{
          let link = document.createElement('a');
          link.href = firstLink;
          //link.innerHTML = 'Open this...';
          e.link = link;
        }
        new_row = e;
        //console.log(new_row);
      }
      new_data.push(new_row);
    });

    return new_data;
  }
  
  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
            return;
    }
    //console.log(f);
    let post = {'title':this.data.message,'author':this.data.message};
    this.createPost(post);
    this.data.message = '';
  }

  /*
  postRefresh(){
    setInterval(getPost,this.refresh_interval);
  }
  */

}
