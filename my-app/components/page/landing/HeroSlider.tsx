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
import { motion } from "framer-motion"
const HeroSlider = () => {
  return (
    <div className='h-full w-full'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
      // autoplay={{ delay: 4000 }}
      // pagination={{ clickable: true }}
      >
        {[hero1, hero2, hero3, hero4, hero5, hero6].map((hero, index) => (
          <SwiperSlide key={index} className='h-full overflow-hidden rounded-2xl'>
            <div className='overflow-hidden'>
              <motion.div className="group rounded-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.05 }}
                transition={{ duration: 1 }}
              >
                <Image
                  className="block aspect-[1.2] w-full h-full rounded-2xl object-cover ease-in-out"
                  src={hero}
                  width={800}
                  height={800}
                  alt={`Hero ${index + 1}`}
                />
              </motion.div>
                <div>
                  <span className="absolute left-5 bottom-5 flex flex-col gap-1">
                    <span className="text-xl font-semibold text-white">Manganite</span>
                    <span className="text-gray-500 font-semibold text-base">Fred Ryan</span>
                  </span>
                </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default HeroSlider;
