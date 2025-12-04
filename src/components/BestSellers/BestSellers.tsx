import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useAppSelector } from '../../store/hooks';
import ProductCard from '../Product/ProductCard';


const BestSellers = () => {
    const { products } = useAppSelector(state => state.allProducts)

    return (
        <section>
            <div className='xl:w-[1224px] px-5 m-auto xl:px-0'>
                <div className='flex justify-between items-center mt-5 mb-2 md:mt-15 md:mb-4 xl:mt-22 xl:mb-6'>
                    <h2 className='text-[20px] font-bold leading-[1.4] md:text-[24px] xl:text-[32px] xl:font-semibold'>Best Sellers</h2>
                    <NavLink to="/best-all" className="text-[14px] pr-4 hidden xl:flex">View All</NavLink>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    slidesPerView={2}
                    slidesPerGroup={1}
                    spaceBetween={16}
                    loop={true}
                    autoplay={{ delay: 1500 }}
                    breakpoints={{
                        640: { slidesPerView: 3, spaceBetween: 16 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                    }}
                >

                    {products.slice(0, 6).map((product, ind) => (
                        <SwiperSlide key={ind}>
                            <ProductCard product={product}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default BestSellers;