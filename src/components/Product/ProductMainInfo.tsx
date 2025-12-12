import { classes } from "../../utils/tailwindClasses";
import { FaSortDown } from "react-icons/fa";
import { toggleFavorite } from "../../store/slices/FavoritesSlice/favoritesSlice";
import FavoriteIcon from '@mui/icons-material/Favorite';
import type { IProductsType } from "../../types/types";
import favorite from '../../assets/images/favorite-icon.svg'
import carIcon from '../../assets/images/car-icon.svg'
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleCartItems } from "../../store/slices/CartSlice/CartSlice";
import { useEffect, useState } from "react";


const ProductMainInfo = ({ product }: { product: IProductsType }) => {
    const dispatch = useAppDispatch()
    const { FavItems } = useAppSelector(state => state.favorites);
    const isFav = FavItems.includes(product._id);
    const [sizeValue, setSizevalue] = useState<string>("")

    console.log(product.colors);
    

    useEffect(() => {
        setSizevalue("");
    }, [product._id]);

    return (
        <div className="sm:flex gap-5 sm:px-5 lg:gap-6 justify-start xl:justify-center">
            <div className="flex justify-center lg:justify-start xl:justify-center sm:w-[45%] xl:max-w-150">
                <img src={product.image} alt={product.title} className="w-full max-w-120 xl:max-w-150" />
            </div>

            <div className="flex flex-col gap-4 px-5 xs:px-10 sm:px-0 max-w-150 sm:w-[55%]">
                <h2 className="text-[20px] font-bold mt-4 lg:text-[28px] xl:text-[32px] sm:mt-0">{product.title}</h2>
                <p className="text-[14px] lg:text-[16px] xl:text-[18px]">{product.description}</p>

                <div>
                    <p>Colors</p>
                    <div className='flex gap-2 pt-2'>
                        {product.colors.map((c, i) => (
                            <button key={i}
                                style={{ backgroundColor: c }}
                                className={`${classes.colorBtn} ${c === "#FFFFFF" ? "border border-gray-400" : ""}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <p className="text-[14px] text-[#868686] text-right lg:mb-2">Size Guide</p>
                    <select
                        onChange={(e) => setSizevalue(e.target.value)}
                        className="w-full h-10 outline-0 text-[14px] font-semibold border border-[#DFDFDF] pl-5 appearance-none lg:text-[16px] cursor-pointer">
                        <option hidden className="text-[12px] font-semibold">Size</option>
                        {product.size.map((s, i) => (
                            <option key={i} value={s}>{s}</option>
                        ))}
                    </select>
                    <FaSortDown className="absolute right-4 bottom-4 pointer-events-none" />
                </div>

                <button
                    onClick={() => dispatch(toggleCartItems({ id: product._id, size: sizeValue }))}
                    className="w-full h-10 bg-bg_green text-[14px] text-primary cursor-pointer duration-300 hover:bg-green-900"
                >
                    Add To Cart ( ${product.price} )
                </button>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:px-5">
                    <button
                        onClick={() => dispatch(toggleFavorite(product._id))}
                        className="h-10 flex justify-center items-center text-[#868686] text-[14px] cursor-pointer"
                    >
                        {
                            isFav
                                ? <div> <FavoriteIcon className='text-red-500' /> Remove From Wish List </div>
                                : <div className="flex gap-1"> <img src={favorite} alt="favorite" /> Add To Wish List</div>
                        }
                    </button>
                    <button className="h-10 flex gap-1 justify-center items-center text-[#868686] text-[14px] mb-8 cursor-pointer">
                        <img src={carIcon} alt="car icon" />
                        Easy Return
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductMainInfo