import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],

})
export class ArticleComponent implements OnInit {
  articles:any[];
  errorMessage:any;

  @Input() item;
  @Output() delete = new EventEmitter();

  constructor() {}

  deleteArticle(item){
    this.delete.emit(item);
  }

  ngOnInit() {

  }

}
