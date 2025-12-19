import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import TotalAmount from "./TotalAmount";

const ShippingCart = () => {
    const navigate = useNavigate();

    return (
        <div className="md:bg-[#F0F2EF] max-w-150 mx-auto lg:mx-0 lg:max-w-135">
            <div className="min-h-screen px-5 pb-8 flex flex-col">
                <div className="flex items-center gap-5 pt-15 pb-8 md:pt-8 md:pb-4 md:justify-center">
                    <button className="text-[14px] text-bg_green md:hidden" onClick={() => navigate(-1)}>Back</button>
                    <h3 className="font-semibold text-[20px]">Your Cart</h3>
                </div>
                <div className="flex flex-col gap-8 items-center">
                    <CartItem />
                </div>
                <TotalAmount />
            </div>
        </div>
    )
}

export default ShippingCart