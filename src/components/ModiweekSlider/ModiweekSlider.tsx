import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import sunday from "../../assets/images/modiweek1.jpg";
import monday from "../../assets/images/modiweek2.jpg";
import tuesday from "../../assets/images/modiweek3.jpg";
import wednesday from "../../assets/images/modiweek4.png";
import thursday from "../../assets/images/modiweek5.png";
import ModiweekCard from "../ModiweekCard/ModiweekCard";


const days = [
    { day: "Sunday", img: sunday },
    { day: "Monday", img: monday },
    { day: "Tuesday", img: tuesday },
    { day: "Wednesday", img: wednesday },
    { day: "Thursday", img: thursday },
];

const ModiweekSlider = () => {
    return (
        <section className="max-w-[1224px] mx-auto">
            <div className="titleDiv">
                <h2>Modiweek</h2>
            </div>

            <Swiper
                modules={[Autoplay]}
                slidesPerView={4}
                slidesPerGroup={1}
                spaceBetween={24}
                loop={true}
                autoplay={{ delay: 1200, disableOnInteraction: false }}
            >
                {days.map(({ day, img }) => (
                    <SwiperSlide key={day}>
                        <ModiweekCard img={img} day={day} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ModiweekSlider;