import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import ModiweekCard from '../ModiweekCard/ModiweekCard';
import sunday from "../../assets/images/modiweek1.jpg";
import monday from "../../assets/images/modiweek2.jpg";
import tuesday from "../../assets/images/modiweek3.jpg";
import wednesday from "../../assets/images/modiweek4.png";
import thursday from "../../assets/images/modiweek5.png";


const ModiweekSlider = () => {
    const days = [
        { day: "Sunday", img: sunday },
        { day: "Monday", img: monday },
        { day: "Tuesday", img: tuesday },
        { day: "Wednesday", img: wednesday },
        { day: "Thursday", img: thursday },
    ];

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
                    // autoplay={{ delay: 1500, disableOnInteraction: false }}
                    breakpoints={{
                            640: {slidesPerView: 3},
                            1024: {slidesPerView: 4, spaceBetween: 24, pagination: false}, 
                        }}
                >
                    {days.map(({ day, img }) => (
                        <SwiperSlide key={day}>
                            <ModiweekCard img={img} day={day} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default ModiweekSlider