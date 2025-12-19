import { NavLink, useNavigate } from "react-router-dom";
import CartItem from "../components/ShoppingCart/CartItem"
import TotalAmount from "../components/ShoppingCart/TotalAmount"
import { useAppSelector } from "../store/hooks";
import CountAndPrice from "../components/ShoppingCart/CountAndPrice";


const CartPage = () => {
    const navigate = useNavigate();
    const { cartItems, counts } = useAppSelector(state => state.cart)
    const { products } = useAppSelector(state => state.allProducts);

    const items = cartItems.map(ci => {
        const product = products.find(p => p._id === ci.id);
        const key = `${ci.id}-${ci.size}-${ci.color}`;
        const count = counts[key] ?? 1;
        const price = product?.price ?? 0;

        return { key, product, size: ci.size, color: ci.color, count, unitPrice: price, totalPrice: price * count };
    });

    return (
        <section className="max-w-[1224px] mx-auto">
            <div className="flex items-center gap-5 pt-15 pl-5 xl:pl-31">
                <button className="text-[14px] text-bg_green" onClick={() => navigate(-1)}>Back</button>
                <h3 className="font-semibold text-[20px]">Your Cart</h3>
            </div>
            <div className="min-h-screen px-5 py-15 flex flex-col items-center">
                <div className="md:flex gap-8 md:gap-15 lg:gap-32 justify-between">
                    <div className="flex flex-col gap-8 md:flex-1">
                        <p>Order Summary</p>
                        <CartItem />
                    </div>

                    <div className="flex flex-col md:flex-1">
                        <div className="hidden md:flex flex-col gap-4 flex-1">
                            <div className='w-full grid grid-cols-3 mb-10'>
                                <p>Price</p>
                                <p className="text-center">Quantity</p>
                                <p className="text-right">Total</p>
                            </div>
                            {items.map(item => (
                                <CountAndPrice key={item.key} item={item} />
                            ))}
                        </div>

                        <div className="max-w-[600px]">
                            <TotalAmount />
                            <NavLink to='/shipping'>
                                <div className="text-right pt-4">
                                    <button className="w-[140px] sm:w-[184px] h-10 bg-bg_green text-[14px] text-primary cursor-pointer">Next</button>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartPage