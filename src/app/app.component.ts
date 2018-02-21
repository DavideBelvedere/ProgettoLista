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

  constructor(private headerService: HeaderService) {
    this.headerService.menuSelected$.subscribe((id: string) => {//chiama una funzione al subscribe che ha in ingresso il parametro id
      this.currentSection = id;

    });
  }

  getId(id: string) {
    this.id = id;
    this.headerService.setSelection("Game-Detail");
  }
  
}
