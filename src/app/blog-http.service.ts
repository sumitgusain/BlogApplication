import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public authToken = "OGE4YTlmYTFhMDAyMmE5YzkyYjFlOWM3OGJiZTlhYWNjN2ZhOGYxZDI3ZTFjNGI0NzE5ZGEyMzUwYzMxYzU1M2U0M2U1ZDk5N2M5ZTRiMWJmMTkzZDVhY2M4NmQwMWExZGU1M2VlZTY4ZjdmYzI4MmQzNWM5MmZkYTFjY2IxNjgwOQ==";
  public currentBlog;
  public blogId;
  public allBlogs;
  public baseUrl = "https://blogapp.edwisor.com/api/v1/blogs";

  constructor(private _http: HttpClient) {
    console.log("blogservice called");
  }

public getAllBlogs():Observable<any>{
  let data = this._http.get(this.baseUrl+'/all'+'?authToken='+this.authToken);
  return data;
}


  public getSingleBlogInformation(currentId): any {
    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentId + '?authToken=' + this.authToken);
    return myResponse;

  }

  public createBlog(blogData): any {
    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData);
    return myResponse;
  }

  public deleteBlog(blogId): any {
    let data = {}
    //https://blogapp.edwisor.com/api/v1/blogs/kc93KfAdb/delete?
    let myResponse = this._http.post('https://blogapp.edwisor.com/api/v1/blogs/'+blogId+'/delete?authToken='+ this.authToken,blogId);
    return myResponse;
  }

  public editBlog(blogId, blogData){
let myResponse = this._http.put(this.baseUrl+'/'+blogId+'/edit'+'?authToken='+this.authToken,blogData);
return myResponse;
  }
}
