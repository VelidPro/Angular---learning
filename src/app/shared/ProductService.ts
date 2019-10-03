import {Injectable} from "@angular/core"
import {IProduct} from "./IProduct"

@Injectable({
    providedIn: 'root'
})
export class ProductService{

    getProducts(): IProduct[]{
        return [
        {
            "title": "SultanCola",
            "description": "This is a description",
            "imagePath": "https://via.placeholder.com/200",
            "price": 200
        } ,
        {
            "title": "Pepsi",
            "description": "A",
            "imagePath": "https://via.placeholder.com/200",
            "price": 10
        } ,

        {
            "title": "CocaCola",
            "description": "This is a description",
            "imagePath": "https://via.placeholder.com/200",
            "price": 35
        } ,
        {
            "title": "Cappy",
            "description": "This is a description",
            "imagePath": "https://via.placeholder.com/200",
            "price": 123
        } ,
        {
            "title": "DvojniC",
            "description": "This is a description",
            "imagePath": "https://via.placeholder.com/200",
            "price": 45
        } ,
        ]

    }


}