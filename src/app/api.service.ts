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
  API_URL  =  'http://localhost:3000';
  constructor(
    private httpClient:HttpClient
  ) { 
  }
  getPosts(){
    return this.httpClient.get(`${this.API_URL}/posts`);
  }
  createPost(post){
    return  this.httpClient.post(`${this.API_URL}/posts/`,post);
  }
}
