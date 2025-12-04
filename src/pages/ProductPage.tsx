import { useParams } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import type { IProductsType } from '../types/types';
import ProductDetails from '../components/Product/ProductDetails';

const ProductPage = () => {
    const { id } = useParams();
    const { products } = useAppSelector((state: any) => state.allProducts)
    const product: IProductsType | undefined = products.find((pr: { _id: string | undefined; }) => pr._id == id);

    return (
        <section className='min-h-screen'>
            {
                product 
                    ? <ProductDetails product={product}/>
                    : <div>Product not found</div>
            }

        </section>
    )
}

export default ProductPage