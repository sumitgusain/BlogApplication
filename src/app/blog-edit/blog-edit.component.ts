import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';
import { BlogService } from '../blog.service';
import {Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr/';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  public currentBlog;
  public myBlogId;
  public possibleCategories:string;

  constructor(private toastr: ToastrService, private _route: ActivatedRoute, private router:Router, private blogService: BlogService,private blogHttpService: BlogHttpService) { }

  ngOnInit() {
    this.myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(this.myBlogId);
    this.blogHttpService.getSingleBlogInformation(this.myBlogId).subscribe(
      data=>{
        console.log(data);
        this.currentBlog = data["data"];
        console.log("current Blog is");
        console.log(this.currentBlog);
      },
      error=>{
        console.log("some Error Occur");
        console.log(error.errorMessage)
      }
    )
  }

  public editThisBlog():any{
    this.blogHttpService.editBlog(this.myBlogId, this.currentBlog).subscribe(
      data =>{
        console.log(data);
        this.toastr.success('Blog edited Successfully', 'success!');
        setTimeout(()=>{
          this.router.navigate(['/blog',this.myBlogId]);
        },1000)
        
      },
      error=>{
        console.log("Some Error occur");
        console.log(error.errorMessage);
        this.toastr.success('You Are Doing Something Wrong', 'Error!');
      }
    )
  }

}
