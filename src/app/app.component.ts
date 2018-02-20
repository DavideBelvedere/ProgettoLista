import { Component, ViewChild } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { HeaderService } from './headerService';
import { ListVideogame } from './listVideogame';
import { ListViewComponent } from './list-view/list-view.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSection = "Home";
  id = "";
  callFromEdit = false;//per vedere se l'edit è stato richiamato dal dettaglio
  @ViewChild(ListViewComponent) viewChild: ListViewComponent;
  @ViewChild(GameDetailComponent) detailChild: GameDetailComponent;
  constructor(private headerService: HeaderService) {
    this.headerService.menuSelected$.subscribe((id: string) => {//chiama una funzione al subscribe che ha in ingresso il parametro id
      /*/if(id=='Edit'){
        this.id="";
      }*/
      this.currentSection = id;

    });


  }
  ngAfterViewChecked() {
    this.callFromEdit=false;
    
    if (this.viewChild && this.viewChild.id && this.id != this.viewChild.id) {
      this.id = this.viewChild.id;
      let this_ = this;
      
      //devo rendere asincrona la funzione e setto una variabile this_ in modo 
      //che prenda quella di afterviewchecked e non quella di timeout
      setTimeout(function () {
        this_.headerService.setSelection("Game-Detail");

      }, 0);
    }
    //if(this.detailChild && this.detailChild.calledFromEdit){
      //alert("appcomponent "+this.callFromEdit+" --- detail-component "+this.detailChild.calledFromEdit);
    //}
    if (this.detailChild && this.detailChild.id &&  this.detailChild.calledFromEdit) {
      
      this.callFromEdit = this.detailChild.calledFromEdit;
    }
  }
}
