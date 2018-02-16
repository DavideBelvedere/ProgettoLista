import { Component, ViewChild } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { HeaderService } from './headerService';
import { ListVideogame } from './listVideogame';
import { ListViewComponent } from './list-view/list-view.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSection = "Home";
  id="";
  @ViewChild(ListViewComponent) viewChild: ListViewComponent;
  constructor(private headerService: HeaderService ) {
    this.headerService.menuSelected$.subscribe((id:string)=>{//chiama una funzione al subscribe che ha in ingresso il parametro id
      this.currentSection = id;
    });

    
  }
  ngAfterViewChecked(){
    
    if(this.viewChild && this.viewChild.id && this.id!=this.viewChild.id){
      this.id=this.viewChild.id;
      let this_ = this;
      setTimeout(function(){
        this_.headerService.setSelection("Game-Detail");
      
      }, 0);
    }
  }
}
