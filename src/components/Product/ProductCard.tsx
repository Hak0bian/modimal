import { NavLink } from 'react-router-dom';
import type { IProductsType } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleFavorite } from '../../store/slices/FavoritesSlice/favoritesSlice';
import { classes } from '../../utils/tailwindClasses';
import favorite from '../../assets/images/favorite-icon.svg'
import FavoriteIcon from '@mui/icons-material/Favorite';


const ProductCard = ({ product }: { product: IProductsType }) => {
    const dispatch = useAppDispatch();
    const { FavItems } = useAppSelector(state => state.favorites);
    const isFav = FavItems.includes(product._id);

    const handleFavorite = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(toggleFavorite(product._id));
    };

    return (
        <NavLink to={`/product/${product._id}`} className="relative">
            <img key={product._id} src={product.image} alt={product.type} className='w-full object-cover aspect-3/4 xl:w-[392px] xl:h-[438px]' />
            <div className='xs:pl-2'>
                <div className='flex flex-col gap-2'>
                    <p className='text-[14px] font-semibold md:mt-1 xl:text-[16px] xl:font-bold xl:mt-1.5 line-clamp-1'>{product.title}</p>
                    <div className='text-[14px] xs:flex justify-between xl:text-[16px]'>
                        <p className=''>{product.brand}</p>
                        <p className='font-semibold text-right pr-4 xl:font-bold'>{`$${product.price}`}</p>
                    </div>
                </div>
                <div className='flex gap-2 pt-5 pb-4'>
                    {
                        product.colors.map((c, i) => (
                            <button
                                key={i}
                                className={`${classes.colorBtn} ${c === "#FFFFFF" ? "border border-gray-400" : ""}`}
                                style={{ backgroundColor: c }}
                            ></button>
                        ))
                    }
                </div>
            </div>

            <button className={classes.favoriteBtn} onClick={handleFavorite }>
                {
                    isFav
                        ? <FavoriteIcon className='text-red-500' />
                        : <img src={favorite} alt="favorite" />
                }
            </button>
            {
                product.isNew && <span className={classes.newBtn}>New</span>
            }
        </NavLink>
    )
}

export default ProductCard