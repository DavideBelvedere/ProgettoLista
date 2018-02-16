
import { VideoGame } from "./videogame";

export class ListVideogame {
     games: VideoGame[] = [];
    constructor(){
        this.games.push(new VideoGame("../assets/img/fifa18.jpg", "Fifa 18", 70, "1"));
        this.games.push(new VideoGame("../assets/img/fifa18.jpg", "Battelfield 4", 60, "2"));
        this.games.push(new VideoGame("../assets/img/fifa18.jpg", "God of war 4", 50, "3"));
        this.games.push(new VideoGame("../assets/img/fifa18.jpg", "Call of duty ", 80, "4"));
    }
    getVideogameList(): VideoGame[] {
        return this.games;
    }
}