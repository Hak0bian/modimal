import ShippingCart from "../components/ShoppingCart/ShippingCart"
import ShoppingForm from "../components/ShoppingCart/ShoppingForm"


const ShippingPage = () => {
    return (
        <section className="md:flex md:flex-row-reverse lg:gap-10 xl:gap-26 max-w-[1224px] mx-auto">
            <div className="flex-1 min-w-0">
                <ShippingCart />
            </div>
            <div className="flex-1 min-w-0">
                <ShoppingForm />
            </div>
        </section>
    )
}

export default ShippingPage