import { NavLink } from "react-router-dom"
import close from "../../assets/images/close-icon.svg";
import { classes } from "../../utils/tailwindClasses";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleCartItems } from "../../store/slices/CartSlice/CartSlice";
import { useEffect, useState } from "react";
import minus from '../../assets/images/minimize.svg'
import plus from '../../assets/images/add.svg'

const ShoppingCart = ({ setBagIsOpen }: { setBagIsOpen: (state: boolean) => void }) => {
    const dispatch = useAppDispatch()
    const { cartItems } = useAppSelector(state => state.cart)
    const { products } = useAppSelector((state) => state.allProducts)
    const [counts, setCounts] = useState<Record<string, number>>({});
    const cartProducts = cartItems
        .map(ci => ({ product: products.find(p => p._id === ci.id), size: ci.size }))
        .filter(p => p.product !== undefined);


    useEffect(() => {
        const initialCounts: Record<string, number> = {};

        cartItems.forEach(ci => {
            const key = `${ci.id}-${ci.size}`;
            initialCounts[key] = counts[key] ?? 1;
        });

        setCounts(initialCounts);
    }, [cartItems]);


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
                        <div className="max-h-120 overflow-y-auto">
                            {
                                cartProducts.map(p => {
                                    const key = `${p.product!._id}-${p.size}`;

                                    const handleDecrease = () => {
                                        setCounts(prev => ({
                                            ...prev,
                                            [key]: Math.max((prev[key] ?? 1) - 1, 1),
                                        }));
                                    };

                                    const handleIncrease = () => {
                                        setCounts(prev => ({
                                            ...prev,
                                            [key]: Math.min(
                                                (prev[key] ?? 1) + 1,
                                                p.product?.stock ?? (prev[key] ?? 1)
                                            ),
                                        }));
                                    };

                                    return (
                                        <div className="relative flex gap-2 mb-8 pr-3" key={key}>
                                            <div className="relative w-[110px] shrink-0">
                                                <NavLink to={`product/${p.product?._id}`}>
                                                    <img src={p.product?.image} alt="product image" />
                                                </NavLink>
                                                <span className="absolute top-2 right-2 w-7 h-7 bg-primary grid place-content-center">{counts[key]}</span>
                                            </div>

                                            <div className="w-full flex flex-col justify-between text-[12px]">
                                                <h3 className="font-semibold">{p.product?.title}</h3>
                                                <p>Size: {p.size}</p>
                                                <p>Color: </p>

                                                <div className="flex justify-between">
                                                    <p>${p.product?.price}</p>
                                                    <div className="flex text-center items-center text-[14px] bg-[#D1D9CF] w-17 h-6 justify-between">
                                                        <button className="cursor-pointer" onClick={handleDecrease}>
                                                            <img src={minus} alt="minus" />
                                                        </button>
                                                        <p>{counts[key]}</p>
                                                        <button className="cursor-pointer" onClick={handleIncrease}>
                                                            <img src={plus} alt="plus" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                className="absolute top-0 right-3 md:left-auto md:right-1"
                                                onClick={() => dispatch(toggleCartItems({ id: p.product!._id, size: p.size }))}
                                            >
                                                <img src={close} alt="remove product" />
                                            </button>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    )
            }
            <button className="absolute top-0 left-0 md:left-auto md:right-1" onClick={() => setBagIsOpen(false)}>
                <img src={close} alt="close bag" />
            </button>
        </div>
    )
}

export default ShoppingCart