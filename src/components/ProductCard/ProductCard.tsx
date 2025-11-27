import { NavLink } from 'react-router-dom';
import type { IProductsType } from '../../types/types';
import favorite from '../../assets/images/favorite-icon.svg'
import { classes } from '../../utils/tailwindClasses';

const ProductCard = ({ product }: { product: IProductsType }) => {
    return (
        <>
            {
                <NavLink to='' className="relative">
                        <img key={product._id} src={product.image} alt={product.type} className='w-full object-cover aspect-3/4 xl:w-[392px] xl:h-[438px]' />
                        <div className='xs:pl-2'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[14px] font-semibold md:mt-1 xl:text-[16px] xl:font-bold xl:mt-1.5 line-clamp-1'>{ product.title}</p>
                                <div className='text-[14px] xs:flex justify-between xl:text-[16px]'>
                                    <p className=''>{product.brand}</p>
                                    <p className='font-semibold text-right pr-4 xl:font-bold'>{`$${product.price}`}</p>
                                </div>
                            </div>
                            <div className='flex gap-2 pt-5 pb-4'>
                                <button className={`${classes.collorBtn} bg-bg_green`}></button>
                                <button className={`${classes.collorBtn} bg-pink`}></button>
                                <button className={`${classes.collorBtn} bg-lightblue`}></button>
                            </div>
                        </div>

                        <button className={classes.favoriteBtn}>
                            <img src={favorite} alt="favorite" />
                        </button>
                        {
                            product.isNew && <span className={classes.newBtn}>New</span>
                        }
                </NavLink>
            }
        </>
    )
}

export default ProductCard