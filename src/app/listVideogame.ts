
import { VideoGame } from "./videogame";
import { Injectable } from "@angular/core";

@Injectable()
export class ListVideogame {
    private games: VideoGame[] = [new VideoGame("../assets/img/fifa18.jpg", "Fifa 18", 70, "1"),
    new VideoGame("../assets/img/fifa18.jpg", "Battelfield 4", 60, "2"),
    new VideoGame("../assets/img/fifa18.jpg", "God of war 4", 50, "3")];

    constructor() {
       
    }
    getVideogameList(): VideoGame[] {
        return this.games;
    }
    getGameById(id: string): VideoGame {
        for (let game of this.games) {
            if (game.$id == id) {
                return game;
            }
        }
    }
}