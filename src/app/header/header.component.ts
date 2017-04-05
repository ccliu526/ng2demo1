import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  title = "The Will Will Web";

  @Output()
  addTitle = new EventEmitter();

  constructor() { }

  changeTitle($event: MouseEvent){

    console.log($event);
    if($event.ctrlKey == true){
      this.title = this.title + "~";
    }else{
      this.title = this.title + "!";
    }
    this.addTitle.emit(this.title);

  }

  ngOnInit() {
  }

}
