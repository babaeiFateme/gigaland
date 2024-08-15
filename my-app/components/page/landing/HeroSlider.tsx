'use client'
import Image from 'next/image'
import hero1 from "@/public/images/landing/hero/crs-13.jpg"
import hero2 from "@/public/images/landing/hero/crs-14.jpg"
import hero3 from "@/public/images/landing/hero/crs-15.jpg"
import hero4 from "@/public/images/landing/hero/static-22.jpg"
import hero5 from "@/public/images/landing/hero/static-23.jpg"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HeroSlider = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <Image
                        className='aspect-[1.2] rounded-2xl object-cover'
                        src={hero1}
                        width={800}
                        height={800}
                        alt="Bitski"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className='aspect-[1.2] rounded-2xl object-cover'
                        src={hero2}
                        width={800}
                        height={800}
                        alt="Bitski"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className='aspect-[1.2] rounded-2xl object-cover'
                        src={hero3}
                        width={800}
                        height={800}
                        alt="Bitski"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className='aspect-[1.2] rounded-2xl object-cover'
                        src={hero4}
                        width={800}
                        height={800}
                        alt="Bitski"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className='aspect-[1.2] rounded-2xl object-cover'
                        src={hero5}
                        width={800}
                        height={800}
                        alt="Bitski"
                    />
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default HeroSlider