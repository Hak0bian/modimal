import { useAppSelector } from "../../store/hooks"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import ProductCard from "./ProductCard";


const YouMayAlsoLike = ({ id, type }: { id: number, type: string }) => {
    const { products } = useAppSelector(state => state.allProducts)
    const similarProducts = products.filter(pr => pr.type === type && pr._id !== id)

    return (
        <>
            {
                similarProducts.length > 0 && (
                    <div>
                        <h3 className="text-[20px] font-bold py-8">You May Also Like</h3>
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            pagination={{ clickable: true }}
                            slidesPerView={2}
                            slidesPerGroup={1}
                            spaceBetween={16}
                            loop={products.length > 3}
                            autoplay={{ delay: 1500, disableOnInteraction: false }}
                            breakpoints={{
                                640: { slidesPerView: 3 },
                                1024: { slidesPerView: 4, spaceBetween: 24, pagination: false },
                            }}
                        >
                            {similarProducts.map((pr, i) => (
                                <SwiperSlide key={i}>
                                    <ProductCard product={pr} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )
            }
        </>
    )
}

export default YouMayAlsoLike