import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from '../../GameItem';
import { ComunicatorService } from '../../comunicator.service';
import { MenuService } from '../Menu.service';
import { GameListService } from '../GameList.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {

  @Input()
  idSelected: string;
  gameSelected: GameItem;
  constructor(private gameListService: GameListService) { 
  }

  ngOnInit() {
    this.gameSelected = this.gameListService.getGameById(this.idSelected);
  }

}
