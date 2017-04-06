import { Component, OnInit } from '@angular/core';
import { ArticleService } from "app/article.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  keyword = "";
  temp = "";
  errorMessage = "";
  data:any[];

  constructor(private articleService:ArticleService){

  }

  ngOnInit(){
     this.articleService.getArticles().subscribe(data => {this.data = data;});
  }

  doAddTitle($event){
    this.temp = $event;
  }

  deleteArticle($event){

    this.data = this.articleService.deleteArticle(this.data.indexOf($event));
  }


}
