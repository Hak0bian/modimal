import GenericShopPage from "../components/GenericShopPage/GenericShopPage"
import { useAppSelector } from "../store/hooks"
import plusSizeSmall from '../assets/images/new-in-small.png'
import plusSizeBig from '../assets/images/new-in-big.png'

const NewInPage = () => {
    const { products } = useAppSelector((state) => state.allProducts)
    const PlusSizeProducts = products.filter(p => p.isNew)
    
    return (
        <GenericShopPage
            products={PlusSizeProducts}
            pageTitle="New In" 
            imageSmall={plusSizeSmall}
            imageBig={plusSizeBig}
        />

    )
}

export default NewInPage