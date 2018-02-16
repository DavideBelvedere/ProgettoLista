import { Component, OnInit } from '@angular/core';

import { VideoGame } from '../videogame';
import { ListVideogame } from '../listVideogame';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'edit',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.css']
})
export class EditViewComponent implements OnInit {
  games: VideoGame[] = [];
  inputValue: string = "";
  trovato: boolean = false;
  currentGame: VideoGame;
  errore: boolean = false;
  constructor(private listGames: ListVideogame) {
    this.games = listGames.getVideogameList();
  }

  ngOnInit() {
  }

  search() {

    if (this.inputValue && this.inputValue != "") {
      this.trovato=false;
      for (let game of this.games) {
        if (game.$title.toLowerCase() === this.inputValue.toLocaleLowerCase()) {
          this.trovato = true;
          this.currentGame = game;
          this.errore = false;
          break;
        }
      }
      
      if (!this.trovato) {
        this.errore = true;
       
      }

    }
  }

  edit() {
    this.listGames.editData(this.currentGame);
  }


}
