import { Component, OnInit, Input } from '@angular/core';
import { VideoGame } from '../videogame';
import { ListVideogame } from '../listVideogame';

@Component({
  selector: 'game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  constructor(private listVideogameService: ListVideogame) { }
  game: VideoGame;
  @Input("idSelected") id: string;
  ngOnInit() {
    this.game = this.listVideogameService.getGameById(this.id);
  }

}
