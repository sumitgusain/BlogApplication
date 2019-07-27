import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router  } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr/';
import {Location} from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit, OnDestroy {

  public currentBlog;

  public myBlogId;
  constructor(private location:Location,private toastr: ToastrService ,private _route:ActivatedRoute, private router:Router, public blogService:BlogService, public blogHttpService:BlogHttpService) {
    console.log("blog-view Constructor IS Called");
   }

  ngOnInit() {
    console.log("blog-view ngOnitCalled");
   
   
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    
    
    console.log("Ye HAi Current Blog ID");
    console.log(myBlogId);

    this.currentBlog = this.blogHttpService.getSingleBlogInformation(myBlogId);
    
    console.log(this.currentBlog);

    this.currentBlog.subscribe(
      data => {
        console.log(data);
        this.currentBlog = data["data"];
      },
      error => {
        console.log("Some error occur");
        console.log(error.errorMessage);
      }
    )

  }



  public deleteThisBlog():any{
  this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
    data =>{
      console.log(data);
      this.toastr.success('Blog Deleted Successfully','Success!');
     setTimeout(()=>{
       this.router.navigate(['/home']);

     },1000)
    }
  )
  }

  public goBackToPreviousPage():any{
    this.location.back();
  }

  ngOnDestroy(){
    console.log("blog-view ondestroy is called");

  }



}
