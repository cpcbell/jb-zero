import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
private  posts:  Array<object> = [];
constructor(private  apiService:  ApiService) { }
ngOnInit() {
    this.getPosts();
}
public  getPosts(){
    this.apiService.getPosts().subscribe((data:  Array<object>) => {
        this.posts  =  data;
        console.log(data);
    });
}

}
