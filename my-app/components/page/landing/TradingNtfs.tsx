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
import trade6 from "@/public/images/landing/trade/static-22.jpg"
import trade5 from "@/public/images/landing/trade/static-23.jpg"
import trade4 from "@/public/images/landing/trade/static-24.jpg"
import author1 from "@/public/images/landing/author/author-9.jpg"
import author2 from "@/public/images/landing/author/author-11.jpg"
import { motion } from "framer-motion"
import { HiCheckCircle } from 'react-icons/hi';

const TradingNtfs = () => {
    return (
        <div className='h-full w-full my-[30px] trading-ntfs'>
            <h2 className="text-white font-bold text-xl my-[40px]">Trending NFTs</h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={30}
                slidesPerView={4}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                navigation
                loop={true}

            >
                <SwiperSlide className='h-full'>
                    <div className=' pt-10 pb-4 px-4 bg-primary-950 rounded-xl relative'>
                        <motion.div className="group rounded-2xl"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 1.05 }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                className="block aspect-[1.2] rounded-2xl object-cover transform transition-transform "
                                src={trade1}
                                width={800}
                                height={800}
                                alt=""
                            />
                        </motion.div>
                        <div className='absolute top-4 left-3 rounded-full group btn-gradient'>
                            <Image className='rounded-full transition-all duration-1000 ease-in-out group-hover:p-1' src={author2} width={50} height={50} alt='author' />
                            <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />

                        </div>
                        <div className='my-3'>
                            <div className='flex gap-2 items-center justify-between mb-2'>
                                <h3 className='text-white text-sm'>Superpious sfs</h3>
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
                <SwiperSlide className='h-full'>
                    <div className=' pt-10 pb-4 px-4 bg-primary-950 rounded-xl relative'>
                        <motion.div className="group rounded-2xl"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 1.05 }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                className="block aspect-[1.2] rounded-2xl object-cover "
                                src={trade2}
                                width={800}
                                height={800}
                                alt=""
                            />
                        </motion.div>
                        <div className='absolute top-4 left-3 rounded-full group btn-gradient'>
                            <Image className='rounded-full transition-all duration-1000 ease-in-out group-hover:p-1' src={author2} width={50} height={50} alt='author' />
                            <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />
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
                <SwiperSlide className='h-full'>
                    <div className=' pt-10 pb-4 px-4 bg-primary-950 rounded-xl relative'>
                        <motion.div className="group rounded-2xl"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 1.05 }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                className="block aspect-[1.2] rounded-2xl object-cover"
                                src={trade3}
                                width={800}
                                height={800}
                                alt=""
                            />
                        </motion.div>
                        <div className='absolute top-4 left-3 rounded-full group btn-gradient'>
                            <Image className='rounded-full transition-all duration-1000 ease-in-out group-hover:p-1' src={author2} width={50} height={50} alt='author' />
                            <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />
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
                <SwiperSlide className='h-full'>
                    <div className=' pt-10 pb-4 px-4 bg-primary-950 rounded-xl relative'>
                        <motion.div className="group rounded-2xl"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 1.05 }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                className="block aspect-[1.2] rounded-2xl object-cover "
                                src={trade4}
                                width={800}
                                height={800}
                                alt=""
                            />
                        </motion.div>
                        <div className='absolute top-4 left-3 rounded-full group btn-gradient'>
                            <Image className='rounded-full transition-all duration-1000 ease-in-out group-hover:p-1' src={author2} width={50} height={50} alt='author' />
                            <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />
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
                <SwiperSlide className='h-full'>
                    <div className=' pt-10 pb-4 px-4 bg-primary-950 rounded-xl relative'>
                        <motion.div className="group rounded-2xl"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 1.05 }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                className="block aspect-[1.2] rounded-2xl object-cover transform"
                                src={trade5}
                                width={800}
                                height={800}
                                alt=""
                            />
                        </motion.div>
                        <div className='absolute top-4 left-3 rounded-full group btn-gradient'>
                            <Image className='rounded-full transition-all duration-1000 ease-in-out group-hover:p-1' src={author2} width={50} height={50} alt='author' />
                            <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />

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
                <SwiperSlide className='h-full'>
                    <div className=' pt-10 pb-4 px-4 bg-primary-950 rounded-xl relative'>
                        <motion.div className="group rounded-2xl"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 1.05 }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                className="block aspect-[1.2] rounded-2xl object-cover"
                                src={trade6}
                                width={800}
                                height={800}
                                alt=""
                            />
                        </motion.div>
                        <div className='absolute top-4 left-3 rounded-full group btn-gradient'>
                            <Image className='rounded-full transition-all duration-1000 ease-in-out group-hover:p-1' src={author2} width={50} height={50} alt='author' />
                            <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />

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
        </div >
    )
}

export default TradingNtfs