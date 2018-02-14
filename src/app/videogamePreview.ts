export class VideoGamePreview {
    private imgUrl: string;
    private title: string;
    private price: number;
    private id: string;


    constructor($imgUrl: string = "", $title: string, $price: number, $id: string) {
        this.imgUrl = $imgUrl;
        this.title = $title;
        this.price = $price;
        this.id = $id;
    }



}