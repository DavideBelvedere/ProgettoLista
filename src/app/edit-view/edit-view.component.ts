import { Component, OnInit, Input } from '@angular/core';

import { VideoGame } from '../videogame';
import { ListVideogame } from '../listVideogame';
import { FormsModule } from '@angular/forms';
import { DetailToEditService } from '../detail-to-edit.service';

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
  currentId: string
  errore: boolean = false;
  constructor(private listGames: ListVideogame, private detailToEdit: DetailToEditService) {
    this.games = listGames.getVideogameList();
  }

  ngOnInit() {
    if (this.detailToEdit.getCallFromEdit()) {
      this.currentId = this.detailToEdit.getId();
      this.searchById();
    }

  }


  search() {

    if (this.inputValue && this.inputValue != "") {
      this.trovato = false;
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
  searchById() {

    for (let game of this.games) {
      if (game.$id === this.currentId) {
        this.inputValue = game.$title;
        this.trovato = true;
        this.currentGame = game;

        this.errore = false;
        break;
      }


    }
  }
  ngOnDestroy() {
    this.detailToEdit.setCallFromEdit(false);
  }
  edit() {
    this.listGames.editData(this.currentGame);
  }


}
