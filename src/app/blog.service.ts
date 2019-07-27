import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public allBlogs = [
    {
      "blogId":1,
      "lastModisied":"2017-11-14T14:15:54.407Z",
      "created":"2017-11-14T14:15:54.407Z",
      "tags":[],
      "author":"Sumit Gusain",
      "category":"comedy, Drama",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is the body",
      "description":"This is Blog Description 1!!",
      "title":"Blog Testing 1!!"
    },
    {
      "blogId":2,
      "lastModisied":"2017-11-14T14:15:54.407Z",
      "created":"2017-11-14T14:15:54.407Z",
      "tags":[],
      "author":"Ganesh Gusain",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is the body",
      "description":"This is Blog Description 2!!",
      "title":"Blog Testing 2!!"
    },
    {
      "blogId":3,
      "lastModisied":"2017-11-14T14:15:54.407Z",
      "created":"2017-11-14T14:15:54.407Z",
      "tags":[],
      "author":"Sumit Gusain",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is the body",
      "description":"This is Blog Description 3!!",
      "title":"Blog Testing 3!!"
    }
  ]
 

    public currentBlog;

    constructor() { 
      console.log("service constructor is called");
    }

    public getAllBlogs():any{
      return this.allBlogs
    }


    public getSingleBlogInformation(currentBlogId):any{
      for(let blog of this.allBlogs){
        if(blog.blogId == currentBlogId){
          this.currentBlog = blog;
        }
        }
      console.log(this.currentBlog)
      return this.currentBlog;
    }


}
