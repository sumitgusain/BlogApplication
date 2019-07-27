import { Component, OnInit} from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { FormsModule }   from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr/';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService ,public form:FormsModule,private _route:ActivatedRoute, private router: Router,
    private toastr: ToastrService ) { }
  
  
  public blogTitle:string;
  public blogBodyHtml:string;
  public blogDescription:string;
  public blogCategory:string;
  public possibleCategories: string;

  ngOnInit() {}
  
public createBlog(): any{
  let blogData ={
    title: this.blogTitle,
    description: this.blogDescription,
    blogBody: this.blogBodyHtml,
    category: this.blogCategory
  }
   console.log("Blog Data");

   this.blogHttpService.createBlog(blogData).subscribe(
     data => {
       console.log("Blog Created");
       console.log(data);
       this.toastr.success('Blog Posted Successfully', 'Success!');
       setTimeout(() => {
          this.router.navigate(['/blog', data.data.blogId]);         
       }, 1000);
     },
     error => {
       console.log("Some Error Occur");
       console.log("error.errorMessage");
       this.toastr.error('some error occured');
     }
   )
}
}
