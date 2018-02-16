import { Component, OnInit, Input } from '@angular/core';
import { ListVideogame } from '../listVideogame';
import { VideoGame } from '../videogame';
import { HeaderService } from '../headerService';


@Component({
  selector: 'list',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  games: VideoGame[] = [];
   id: string;
  constructor(private listVideogame: ListVideogame) {
    this.games = listVideogame.getVideogameList();
  }

  ngOnInit() {
  }

  selectSection(id: string) {
    
    this.id = id;
  }

}
