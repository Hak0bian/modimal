import { NavLink } from "react-router-dom"
import close from "../../assets/images/close-icon.svg";
import { classes } from "../../utils/tailwindClasses";
import { useAppSelector } from "../../store/hooks";
import CartItem from "./CartItem";


const ShoppingCart = ({ setBagIsOpen }: { setBagIsOpen: (state: boolean) => void }) => {
    const { cartItems } = useAppSelector(state => state.cart)
    
    return (
        <div className="relative pt-20 max-w-100">
            {
                cartItems.length === 0
                    ? (
                        <div>
                            <h2 className="font-bold text-center">Your Shopping Bag Is Empty</h2>
                            <div className="text-[14px] text-center mt-4">
                                <p>Discover Modimal</p>
                                <p>And Add Products To Your Bag</p>
                            </div>

                            <div className="flex flex-col items-center gap-6 my-20">
                                <NavLink to='/collection' className={classes.bagBtn}>Collection</NavLink>
                                <NavLink to='/new-in' className={classes.bagBtn}>New In</NavLink>
                                <NavLink to='/best-sellers' className={classes.bagBtn}>Best Sellers</NavLink>
                            </div>

                        </div>
                    ) : (
                        <CartItem />
                    )
            }
            <button className="absolute top-0 left-0 md:left-auto md:right-1 cursor-pointer" onClick={() => setBagIsOpen(false)}>
                <img src={close} alt="close bag" />
            </button>

            <div className="text-center my-8">
                <button className="w-[184px] h-10 bg-bg_green text-[14px] text-primary">Check Out</button>
            </div>
        </div>
    )
}

export default ShoppingCart