import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  environment.apiUrl; // 'http://mini.local:8001';
  constructor(
    private httpClient:HttpClient
  ) { 
  }
  getPosts(){
    let sort = '?_sort=id&_order=desc';
    return this.httpClient.get(`${this.API_URL}/posts${sort}`);
  }
  createPost(post){
    return  this.httpClient.post(`${this.API_URL}/posts/`,post);
  }
}
