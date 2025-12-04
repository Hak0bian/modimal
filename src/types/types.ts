export interface IProductsType {
    _id: number,
    title: string,
    isNew: boolean,
    oldPrice: string,
    price: number,
    discountedPrice: number,
    description: string,
    category: string,
    type: string,
    stock: number,
    brand: string,
    image: string,
    rating: number
    size: [
        string,
        string,
        string
    ],
    colors: [
        string,
        string,
        string
    ]
}

export interface IProductsStateType {
    products: IProductsType[];
    loadingProducts: boolean;
    errorProducts: string | null;
}