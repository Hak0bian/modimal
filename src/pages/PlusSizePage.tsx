import GenericShopPage from "../components/GenericShopPage/GenericShopPage"
import { useAppSelector } from "../store/hooks"
import plusSizeSmall from '../assets/images/plus-size-small.png'
import plusSizeBig from '../assets/images/plus-size-big.png'

const PlusSizePage = () => {
    const { products } = useAppSelector((state) => state.allProducts)
    const PlusSizeProducts = products.filter(p => p.size.some(s => s === "XL" || s === '34'))
    
    return (
        <GenericShopPage
            products={PlusSizeProducts}
            pageTitle="Plus Size"
            imageSmall={plusSizeSmall}
            imageBig={plusSizeBig}
        />

    )
}

export default PlusSizePage