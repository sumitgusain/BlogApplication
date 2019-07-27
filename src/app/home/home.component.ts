import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import {Observable} from 'rxjs';
import {tap,catchError} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit, OnDestroy {
  public allBlogs;

  constructor(public blogHttpService:BlogHttpService) {
    console.log("Home Component constructor called")

  }

  ngOnInit() {
    console.log("Home Component OnInit called")
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(
      data=>{
        console.log("Ye Hai DATA");
        console.log(data);
        this.allBlogs = data["data"];
       
      },
      error =>{
        console.log("Some Error Occur");
        console.log(error.errorMessage);

      }
    )
 
console.log(this.allBlogs);

  }

  ngOnDestroy(){
    console.log("Home Component OnDestroy called")

  }

}
