import { GameItem } from '../GameItem';
import { Injectable } from '@angular/core';

@Injectable()
export class GameListService {
  
  games: GameItem[] = [new GameItem("01", "fifa 18", "Gioco Di Calcio", "Sportivo", 4.5, 49.90, 2017, "PS4"), new GameItem("02", "pes 18", "Gioco Di Calcio", "Sportivo", 4.5, 49.90, 2017, "PS4"), new GameItem("03", "FIFA 17", "Gioco Di Calcio", "Sportivo", 4.5, 49.90, 2016, "PS4")];

  getGamesList(): GameItem[]{
    return this.games;
}
getGameById(id: string): GameItem {
  for(let game of this.games)
  {
    if(game.id == id)
      return game;
  }
}

}
