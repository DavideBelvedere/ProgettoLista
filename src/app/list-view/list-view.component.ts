import { Component, OnInit } from '@angular/core';
import { ListVideogame } from '../listVideogame';
import { VideoGamePreview } from '../videogamePreview';


@Component({
  selector: 'list',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  games: VideoGamePreview[] =[];
  constructor(private list: ListVideogame) { 
    this.games=list.getVideogameList();
  }

  ngOnInit() {
  }

}
