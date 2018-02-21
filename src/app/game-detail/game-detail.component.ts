import { Component, OnInit, Input } from '@angular/core';
import { VideoGame } from '../videogame';
import { ListVideogame } from '../listVideogame';
import { HeaderService } from '../headerService';

@Component({
  selector: 'game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  constructor(private listVideogameService: ListVideogame, private headerService: HeaderService) { }
  game: VideoGame;
  calledFromEdit: boolean = false;
  @Input("idSelected") id: string;
  ngOnInit() {
    this.game = this.listVideogameService.getGameById(this.id);
  }
  goEditComponent() {
    this.calledFromEdit = true;
    let this_ = this;
    setTimeout(function () {
      this_.headerService.setSelection("Edit");
    }, 0);
    
    

  }
  ngOnDestroy() {
    this.id = "";
    this.game=null;
  }
}
