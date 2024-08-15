'use client';
import Image from 'next/image';
import hero1 from '@/public/images/landing/hero/crs-13.jpg';
import hero2 from '@/public/images/landing/hero/crs-14.jpg';
import hero3 from '@/public/images/landing/hero/crs-15.jpg';
import hero4 from '@/public/images/landing/hero/static-22.jpg';
import hero5 from '@/public/images/landing/hero/static-23.jpg';
import hero6 from '@/public/images/landing/hero/crs-16.jpg';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const HeroSlider = () => {
  return (
    <div className='h-full w-full'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
      >
        {[hero1, hero2, hero3, hero4, hero5, hero6].map((hero, index) => (
          <SwiperSlide key={index} className='h-full'>
            <div className="group overflow-hidden rounded-2xl">
              <Image
                className="block aspect-[1.2] w-full h-full rounded-2xl object-cover transform transition-transform duration-1000 ease-in-out group-hover:scale-150"
                src={hero}
                width={800}
                height={800}
                alt={`Hero ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
