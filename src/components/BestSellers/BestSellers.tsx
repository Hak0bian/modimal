import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import bestSmallOne from '../../assets/images/best1-small.png';
import bestSmallTwo from '../../assets/images/best2-small.png';
import bestOne from '../../assets/images/best1.png';
import bestTwo from '../../assets/images/best2.png';
import bestThree from '../../assets/images/best3.png';
import BestSellersCard from '../BestSellersCard/BestSellersCard';


const BestSellers = () => {
    const bestObj = [
        { title: "Tailored stretch", about: "Turn It Up Pants", price: "$180", smallImg: bestSmallOne, bigImg: bestOne, color1: '#0C0C0C', color2: '#7DC3EB', color3: '#748C70' },
        { title: "Technical Silk", about: "Make A Splash", price: "$120", smallImg: bestSmallTwo, bigImg: bestTwo, color1: '#909225', color2: '#19418E', color3: '#0C0C0C' },
        { title: "Cool Weave", about: "Anywhere Dress", price: "$210", smallImg: bestThree, bigImg: bestThree, color1: '#D0A5EA', color2: '#909225', color3: '#748C70' },
    ]
    
    return (
        <section>
            <div className='xl:w-[1224px] px-5 m-auto xl:px-0'>
                <div className='flex justify-between items-center mt-5 mb-2 md:mt-15 md:mb-4 xl:mt-22 xl:mb-6'>
                    <h2 className='text-[20px] font-bold leading-[1.4] md:text-[24px] xl:text-[32px] xl:font-semibold'>Best Sellers</h2>
                    <NavLink to="/best-all" className="text-[14px] pr-4 hidden xl:flex">View All</NavLink>
                </div>

                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    slidesPerView={2}
                    slidesPerGroup={1}
                    spaceBetween={16}
                    breakpoints={{
                        640: {slidesPerView: 3},
                        1024: {spaceBetween: 24}
                    }}
                >

                    {bestObj.map((obj, ind) => (
                        <SwiperSlide key={ind}>
                            <BestSellersCard cardInfo={obj} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default BestSellers;