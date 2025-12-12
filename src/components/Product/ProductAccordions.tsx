import { PiPlusBold, PiMinusBold } from "react-icons/pi";
import { GoStarFill } from "react-icons/go";
import { useRef, useState } from "react";
import type { IProductsType } from "../../types/types";


const ProductAccordions = ({ product }: { product: IProductsType }) => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggle = (index: number) => {
        setOpenIndexes(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className="sm:w-[44%] max-w-120 xl:max-w-150">
            {[
                {
                    title: "Product Details",
                    content: (
                        <div className="capitalize">
                            <p>Type: {product.type}</p>
                            <p>Category: {product.category}</p>
                            <p>Brand: {product.brand}</p>
                            <p>In Stock: {product.stock}</p>
                            <p>Price: ${product.price}</p>
                            <p>Old Price: ${product.oldPrice}</p>
                            <p>Discounted Price: ${product.discountedPrice}</p>
                            <p className="flex items-center gap-0.5">Rating: {product.rating} <GoStarFill /></p>
                        </div>
                    )
                },
                {
                    title: "Shipping And Return",
                    content: (
                        <div>
                            <p>Shipping:</p>
                            <p>Is Free On US, Canada Orders Are $175</p>
                            <p>Returns:</p>
                            <p>Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase.</p>
                        </div>
                    )
                }
            ].map((item, i) => {
                const isOpen = openIndexes.includes(i);

                return (
                    <div key={i}>
                        <button
                            onClick={() => toggle(i)}
                            className="w-full h-15 flex justify-between items-center px-4 bg-[#F0F2EF] border border-[#CBCBCB] border-b-0"
                        >
                            <h3 className={`text-[14px] font-semibold ${isOpen ? "text-bg_green" : ""}`}>{item.title}</h3>
                            {
                                isOpen
                                    ? (<PiMinusBold className="text-bg_green text-[14px]" />)
                                    : (<PiPlusBold className="text-[14px]" />)
                            }
                        </button>

                        <div
                            ref={el => { contentRefs.current[i] = el }}
                            style={{ height: isOpen ? contentRefs.current[i]?.scrollHeight : 0 }}
                            className="overflow-hidden transition-all duration-300 bg-[#F0F2EF] border border-[#CBCBCB]"
                        >
                            <div className="p-6 text-[12px]">{item.content}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default ProductAccordions