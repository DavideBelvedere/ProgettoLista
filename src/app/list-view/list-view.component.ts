import { Component, OnInit } from '@angular/core';
import { ListVideogame } from '../listVideogame';
import { VideoGame } from '../videogame';
import { HeaderService } from '../headerService';


@Component({
  selector: 'list',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  games: VideoGame[] =[];
  constructor(private list: ListVideogame, private headerService:HeaderService) { 
    this.games=list.getVideogameList();
  }

  ngOnInit() {
  }

  selectSection(){
    this.headerService.setSelection("Game-Detail");
  }

}
