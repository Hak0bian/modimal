import { toggleCartItems } from "../../store/slices/CartSlice/CartSlice";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import minus from '../../assets/images/minimize.svg'
import plus from '../../assets/images/add.svg'
import close from "../../assets/images/close-icon.svg";


const CartItem = () => {
    const dispatch = useAppDispatch()
    const { products } = useAppSelector((state) => state.allProducts)
    const { cartItems } = useAppSelector(state => state.cart)
    const [counts, setCounts] = useState<Record<string, number>>({});
    const cartProducts = cartItems
        .map(ci => ({ product: products.find(p => p._id === ci.id), size: ci.size, color: ci.color }))
        .filter(p => p.product !== undefined);

    useEffect(() => {
        const initialCounts: Record<string, number> = {};

        cartItems.forEach(ci => {
            const key = `${ci.id}-${ci.size}-${ci.color}`;
            initialCounts[key] = counts[key] ?? 1;
        });

        setCounts(initialCounts);
    }, [cartItems]);


    return (
        <div className="max-h-100 overflow-y-auto">
            {
                cartProducts.map(p => {
                    const key = `${p.product!._id}-${p.size}-${p.color}`;

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
                                <p className="flex items-center gap-1">Color:
                                    <span style={{ backgroundColor: p.color }} className="w-3.5 h-3.5 rounded-full"></span>
                                </p>

                                <div className="flex justify-between">
                                    <p className="font-semibold">${((counts[key] ?? 1) * (p.product?.price ?? 0)).toFixed(2)}</p>
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
                                className="absolute top-0 right-3 md:left-auto md:right-1 cursor-pointer"
                                onClick={() => dispatch(toggleCartItems({ id: p.product!._id, size: p.size, color: p.color }))}
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

export default CartItem