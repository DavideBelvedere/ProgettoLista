
import { VideoGamePreview } from "./videogamePreview";

export class ListVideogame {
    getVideogameList(): VideoGamePreview[] {
        let games: VideoGamePreview[] = [];
        games.push(new VideoGamePreview("../assets/img/fifa18.jpg","Fifa 18",70,"1"));
        games.push(new VideoGamePreview("../assets/img/fifa18.jpg","Battelfield 4",60,"2"));
        games.push(new VideoGamePreview("../assets/img/fifa18.jpg","God of war 4",50,"3"));
        games.push(new VideoGamePreview("../assets/img/fifa18.jpg","Call of duty ",80,"4"));
        return games;

    }
}