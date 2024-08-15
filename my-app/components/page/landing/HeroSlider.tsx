'use client'
import Image from 'next/image'
import hero1 from "@/public/images/landing/hero/crs-13.jpg"
import hero2 from "@/public/images/landing/hero/crs-14.jpg"
import hero3 from "@/public/images/landing/hero/crs-15.jpg"
import hero4 from "@/public/images/landing/hero/static-22.jpg"
import hero5 from "@/public/images/landing/hero/static-23.jpg"
import hero6 from "@/public/images/landing/hero/crs-16.jpg"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HeroSlider = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay={{ delay: 2000 }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="group overflow-hidden rounded-2xl transition ease-in delay-750">
                        <Image
                            className='aspect-[1.2] transition max-h-[600px] ease-in delay-750 group-hover:scale-[1.1] rounded-2xl object-cover'
                            src={hero1}
                            width={800}
                            height={800}
                            alt="Bitski"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="group overflow-hidden rounded-2xl transition ease-in delay-750">
                        <Image
                            className='aspect-[1.2] transition max-h-[600px] ease-in delay-750 group-hover:scale-[1.1] rounded-2xl object-cover'
                            src={hero2}
                            width={800}
                            height={800}
                            alt="Bitski"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="group overflow-hidden rounded-2xl transition ease-in delay-750">
                        <Image
                            className='aspect-[1.2] max-h-[600px] transition ease-in delay-750 rounded-2xl object-cover group-hover:scale-[1.1]'
                            src={hero3}
                            width={800}
                            height={800}
                            alt="Bitski"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='group overflow-hidden rounded-2xl transition ease-in delay-750'>
                        <Image
                            className='aspect-[1.2] rounded-2xl  max-h-[600px] transition ease-in delay-750  object-cover group-hover:scale-[1.1]'
                            src={hero4}
                            width={800}
                            height={800}
                            alt="Bitski"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='group overflow-hidden rounded-2xl transition ease delay-150'>
                        <Image
                            className='aspect-[1.2] max-h-[600px] transition ease-in delay-150 group-hover:scale-[1.1] rounded-2xl object-cover'
                            src={hero5}
                            width={800}
                            height={800}
                            alt="Bitski"
                        />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='group overflow-hidden rounded-2xl transition ease delay-150'>
                        <Image
                            className='aspect-[1.2] max-h-[600px] transition ease-in delay-150 group-hover:scale-[1.1] rounded-2xl object-cover'
                            src={hero6}
                            width={800}
                            height={800}
                            alt="Bitski"
                        />
                    </div>

                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HeroSlider