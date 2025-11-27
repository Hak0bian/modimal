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
    size: [
        string,
        string,
        string
    ],
    image: string,
    rating: number
}

export interface IProductsStateType {
    products: IProductsType[];
    loadingProducts: boolean;
    errorProducts: string | null;
}