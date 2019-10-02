import {Injectable} from "@angular/core"
import {IProduct} from "./IProduct"

@Injectable({
    providedIn: 'root'
})
export class ProductService{

    getProducts(): IProduct[]{
        return [
        {
            "title": "Product 1",
            "description": "This is a description",
            "imagePath": "https://via.placeholder.com/200",
            "price": 200
        } ,
        {
            "title": "A",
            "description": "A",
            "imagePath": "https://via.placeholder.com/200",
            "price": 10
        } ,

        {
            "title": "Product 2",
            "description": "This is a description",
            "imagePath": "https://via.placeholder.com/200",
            "price": 35
        } ,
        {
            "title": "Product 3",
            "description": "This is a description",
            "imagePath": "https://via.placeholder.com/200",
            "price": 123
        } ,
        {
            "title": "Product 5",
            "description": "This is a description",
            "imagePath": "https://via.placeholder.com/200",
            "price": 45
        } ,
        ]

    }


}