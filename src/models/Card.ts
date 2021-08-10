export class Card{
    id: number;
    product_name: string;
    product_price: number;
    card_type: string;
    card_atk: string;
    card_def: string;
    description: string;
    img_thumb: string;
    img_full:string;

    constructor(){
        this.id = 0;
        this.product_name = "";
        this.product_price = 0;
        this.card_type = ""
        this.card_atk="";
        this.card_def="";
        this.description = "";
        this.img_thumb="";
        this.img_full="";

    }
}