import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output()
  selectedId: EventEmitter<String> = new EventEmitter<String>();
  constructor(private listVideogame: ListVideogame) {
    this.games = listVideogame.getVideogameList();
  }

  ngOnInit() {
  }

  selectGame(id: string) {
    this.selectedId.emit(id);
  }

}
