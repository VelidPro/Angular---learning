export class IProduct{
    title: string;
    description: string;
    imagePath: string;
    price : number;


    constructor(title: string, description: string, imagePath: string, price : number) {
        this.title = title;
        this.description = description;
        this.imagePath = imagePath;
        this.price = price;
    }
}