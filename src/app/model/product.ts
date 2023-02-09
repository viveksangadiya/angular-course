export interface Product{
    id : number;
    price:number;
    title:string;
    rating:number;
    description:string;
}


export interface Result{
    products : Product[]
}
/* "id": 1,
"title": "iPhone 9",
"description": "An apple mobile which is nothing like apple",
"price": 549,
"discountPercentage": 12.96,
"rating": 4.69,
"stock": 94,
"brand": "Apple",
"category": "smartphones",
"thumbnail": "...", */