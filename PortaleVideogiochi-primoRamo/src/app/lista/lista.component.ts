import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GameItem } from '../../GameItem';
import { GameListService } from '../GameList.service';
import { ComunicatorService } from '../../comunicator.service';
import { MenuService } from '../Menu.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})


export class ListaComponent implements OnInit {

  @Input()
  games: GameItem[];

  @Output()
  change: EventEmitter<string> = new EventEmitter();

  constructor(private GameService: GameListService, private comunicator: ComunicatorService) { 

    this.games = this.GameService.getGamesList();
  }

  ngOnInit() {
    //this.games.push(new GameItem());
  }
  showData(item:GameItem){
    // chiamo il next nel subject;
    this.change.emit(item.id);
        
  }

}
