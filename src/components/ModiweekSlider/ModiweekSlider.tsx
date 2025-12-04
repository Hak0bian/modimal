import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import ModiweekCard from '../ModiweekCard/ModiweekCard';
import { useAppSelector } from '../../store/hooks';


const ModiweekSlider = () => {
    const { products } = useAppSelector(state => state.allProducts)
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

    return (
        <section>
            <div className='xl:w-[1224px] px-5 m-auto xl:px-0'>
                <div className='mt-5 mb-2 md:mt-15 md:mb-4 xl:mt-22 xl:mb-6'>
                    <h2 className='text-[20px] font-bold leading-[1.4] md:text-[24px] xl:text-[32px] xl:font-semibold'>Modiweek</h2>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    slidesPerView={2}
                    slidesPerGroup={1}
                    spaceBetween={16}
                    loop={true}
                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 4, spaceBetween: 24, pagination: false },
                    }}
                >
                    {products.slice(0, 5).map((product, i) => (
                        <SwiperSlide key={i}>
                            <ModiweekCard product={product} day={days[i]} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default ModiweekSlider