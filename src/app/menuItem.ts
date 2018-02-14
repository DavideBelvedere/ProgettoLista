export class MenuItem {
    value: string;
    id: string;
    selected: boolean;
    constructor(value: string, id: string, selected: boolean) {
        this.value = value;
        this.selected = selected;
        this.id = id;
    }

}