export class VideoGame {
    private imgUrl: string;
    private title: string;
    private price: number;
    private id: string;
    private genere: string;
    private rating: number;
    private anno: number;



	constructor($imgUrl: string, $title: string, $price: number, $id: string, $genere: string="", $rating: number=0, $anno: number=0) {
		this.imgUrl = $imgUrl;
		this.title = $title;
		this.price = $price;
		this.id = $id;
		this.genere = $genere;
		this.rating = $rating;
		this.anno = $anno;
	}

	public get $id(): string {
		return this.id;
	}

	public set $id(value: string) {
		this.id = value;
	}
  



}