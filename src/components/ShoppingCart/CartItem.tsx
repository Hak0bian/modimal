import { changeTotalAmount, decrementItemCount, incrementItemCount, toggleCartItems } from "../../store/slices/CartSlice/CartSlice";
import { NavLink, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useRef } from "react";
import minus from '../../assets/images/minimize.svg'
import plus from '../../assets/images/add.svg'
import close from "../../assets/images/close-icon.svg";


const CartItem = () => {
    const dispatch = useAppDispatch()
    const { products } = useAppSelector((state) => state.allProducts)
    const { cartItems } = useAppSelector(state => state.cart)
    const counts = useAppSelector(state => state.cart.counts);
    const previousTotalRef = useRef(0);
    const location = useLocation()
    const cartProducts = cartItems
        .map(ci => ({ product: products.find(p => p._id === ci.id), size: ci.size, color: ci.color }))
        .filter(p => p.product !== undefined);

    useEffect(() => {
        const initialCounts: Record<string, number> = {};
        cartItems.forEach(ci => {
            const key = `${ci.id}-${ci.size}-${ci.color}`;
            initialCounts[key] = counts[key] ?? 1;
        });
    }, [cartItems]);

    useEffect(() => {
        const sum = cartItems.reduce((acc, ci) => {
            const product = products.find(p => p._id === ci.id);
            const key = `${ci.id}-${ci.size}-${ci.color}`;
            const count = counts[key] ?? 1;
            return acc + (product?.price ?? 0) * count;
        }, 0);

        if (previousTotalRef.current !== sum) {
            dispatch(changeTotalAmount(sum));
            previousTotalRef.current = sum;
        }
    }, [cartItems, counts, products, dispatch]);


    return (
        <>
            {
                cartProducts.map(p => {
                    const key = `${p.product!._id}-${p.size}-${p.color}`;

                    const handleIncrease = (key: string, max?: number) => {
                        dispatch(incrementItemCount({ key, max }));
                    };

                    const handleDecrease = (key: string) => {
                        dispatch(decrementItemCount({ key }));
                    };

                    return (
                        <div key={key} className="relative flex gap-2 pr-3 w-full min-w-[320px] max-w-140 lg:max-w-150 ">
                            <div className="relative w-[110px] shrink-0 bg-gray-300 flex flex-col justify-center">
                                <NavLink to={`/product/${p.product?._id}`}>
                                    <img src={p.product?.image} alt="product image" />
                                </NavLink>
                                <span className="absolute top-2 right-2 w-7 h-7 bg-primary grid place-content-center">{counts[key] ?? 1}</span>
                            </div>

                            <div className="w-full flex flex-col justify-between text-[12px] gap-4">
                                <h3 className="font-semibold">{p.product?.title}</h3>
                                <p>Size: {p.size}</p>
                                <p className="flex items-center gap-1">Color:
                                    <span 
                                        style={{ backgroundColor: p.color }} 
                                        className={`w-3.5 h-3.5 rounded-full ${p.color === "#FFFFFF" ? "border border-gray-400" : ""}`}>
                                    </span>
                                </p>

                                <div className={`flex justify-between ${location.pathname == '/cart' ? "md:invisible" : ''}`}>
                                    <p className="font-semibold">${((counts[key] ?? 1) * (p.product?.price ?? 0)).toFixed(2)}</p>
                                    <div className="flex text-center items-center text-[14px] bg-[#D1D9CF] w-17 h-6 justify-between">
                                        <button className="cursor-pointer" onClick={() => handleDecrease(key)}>
                                            <img src={minus} alt="minus" />
                                        </button>
                                        <p>{counts[key] ?? 1}</p>
                                        <button className="cursor-pointer" onClick={() => handleIncrease(key, p.product?.stock)}>
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
        </>
    )
}

export default CartItem