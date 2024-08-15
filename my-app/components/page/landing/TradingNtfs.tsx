'use client';
import Image from 'next/image';
import { TiHeartFullOutline } from "react-icons/ti";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import trade1 from "@/public/images/landing/trade/anim-9.webp"
import trade2 from "@/public/images/landing/trade/anim-10.webp"
import trade3 from "@/public/images/landing/trade/static-21.jpg"
import trade4 from "@/public/images/landing/trade/static-22.jpg"
import trade5 from "@/public/images/landing/trade/static-23.jpg"

const TradingNtfs = () => {
    return (
        <div className='h-full w-full my-[30px]'>
            <h2 className="text-white font-bold text-xl my-[40px]">Trending NFTs</h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                loop={true}
                autoplay={{ delay: 2000 }}
                pagination={{ clickable: true }}
            >
                <SwiperSlide className='h-full'>
                    <div className='group pt-10 pb-4 px-4 bg-primary-950 rounded-xl'>
                        <div className=" overflow-hidden rounded-2xl">
                            <Image
                                className="block aspect-[1.2] rounded-2xl object-cover transform transition-transform duration-1000 ease-in-out group-hover:scale-150"
                                src={trade1}
                                width={800}
                                height={800}
                                alt=""
                            />
                        </div>
                        <div className='my-3'>
                            <div className='flex gap-2 items-center justify-between mb-2'>
                                <h3 className='text-white text-sm'>Superpious</h3>
                                <div className='text-white text-xl'>
                                    ...
                                </div>
                            </div>
                            <div className='flex gap-2 items-center justify-between'>
                                <div>
                                    <span className='text-gray-600 mr-1 text-sm font-semibold'>
                                        0.06 ETH
                                    </span>
                                    <span className='text-white text-sm font-semibold'>1/20</span>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <TiHeartFullOutline className='text-lg text-primary-400' />
                                    <span className='text-sm text-white'>20</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default TradingNtfs