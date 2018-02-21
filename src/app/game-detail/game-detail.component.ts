import { Component, OnInit, Input } from '@angular/core';
import { VideoGame } from '../videogame';
import { ListVideogame } from '../listVideogame';
import { HeaderService } from '../headerService';
import { DetailToEditService } from '../detail-to-edit.service';

@Component({
  selector: 'game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  constructor(private listVideogameService: ListVideogame, private headerService:HeaderService, private detailToEdit: DetailToEditService) { }
  game: VideoGame;

  @Input("idSelected") id: string;
  
  ngOnInit() {
    this.game = this.listVideogameService.getGameById(this.id);
  }

  goEditComponent() {
    this.detailToEdit.goToEdit(this.game.$id);
  }

backListComponent(){
  this.headerService.setSelection('List');
}

  ngOnDestroy() {
    this.id = "";
    this.game=null;
  }
}
