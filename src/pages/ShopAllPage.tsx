import GenericShopPage from "../components/GenericShopPage/GenericShopPage"
import { useAppSelector } from "../store/hooks"
import shopAllSmall from '../assets/images/shop-all-small.png'
import shopAllBig from '../assets/images/shop-all-big.png'

const ShopAllPage = () => {
    const { products } = useAppSelector((state) => state.allProducts)
    
    return (
        <GenericShopPage
            products={products}
            pageTitle="Shop All"
            imageSmall={shopAllSmall}
            imageBig={shopAllBig}
        />

    )
}

export default ShopAllPage