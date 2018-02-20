import { Component, OnInit, Input } from '@angular/core';

import { VideoGame } from '../videogame';
import { ListVideogame } from '../listVideogame';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'edit',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.css']
})

export class EditViewComponent implements OnInit {
  @Input("passedId") id: string;
  @Input("isCalled") callFromEdit: boolean;
  games: VideoGame[] = [];
  inputValue: string = "";
  trovato: boolean = false;
  currentGame: VideoGame;
  errore: boolean = false;
  constructor(private listGames: ListVideogame) {
    this.games = listGames.getVideogameList();
  }

  ngOnInit() {
    alert(this.callFromEdit);
    if(this.callFromEdit){
      this.searchById();
    }else{
      this.inputValue="";
      this.trovato=false;
    }
   
  }
ngOnDestroy(){
  this.callFromEdit=false;
  alert(this.callFromEdit);
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
      if (game.$id === this.id) {
        this.inputValue=game.$title;
        this.trovato = true;
        this.currentGame = game;
        this.errore = false;
        break;
      }


    }
  }

  edit() {
    this.listGames.editData(this.currentGame);
  }

  
}
