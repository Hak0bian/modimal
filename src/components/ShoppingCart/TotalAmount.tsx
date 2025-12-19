import { useAppSelector } from "../../store/hooks"

const TotalAmount = () => {
    const { cartItems } = useAppSelector((state) => state.cart)
    const { totalAmount } = useAppSelector((state) => state.cart)
    const tax = totalAmount / 20

    return (
        <div className="border-t border-t-gray-300 mt-15 pt-6 max-w-[550px]">
            <div className="flex justify-between text-[14px]">
                <div className="flex flex-col gap-2">
                    <p>Subtotal ({cartItems.length})</p>
                    <p>Tax</p>
                    <p>Shipping</p>
                    <p>Total Orders</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>${totalAmount}</p>
                    <p>{`$${tax.toFixed(2)}`}</p>
                    <p>Free</p>
                    <p>{`$${(totalAmount + tax).toFixed(2)}`}</p>
                </div>
            </div>
            <p className="text-[12px] font-semibold mt-3">The total amount you pay includes all applicable customs duties & taxes. We guarantee no additional charges on delivery</p>
        </div>
    )
}

export default TotalAmount