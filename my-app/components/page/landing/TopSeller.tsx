'use client'

import Image from "next/image"
import userImage from "@/public/images/landing/author/author-11.jpg"
import { FaCircleCheck } from "react-icons/fa6";
import { HiCheckCircle } from "react-icons/hi";
import { useEffect, useState } from "react";

const TopSeller = () => {
    const [topSellers, setTopSellers] = useState([]);
    useEffect(() => {
        const fetchTopSellers = async () => {
            try {
                const response = await fetch(
                    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1'
                );
                const data = await response.json();
                setTopSellers(data);
            } catch (error) {
                console.error('Error fetching top sellers:', error);
            }
        };

        fetchTopSellers();
    }, [])
    console.log(topSellers , "topSellers");
    return (
        <div className="bg-primary-800 rounded-3xl py-[30px] px-[16px] md:px-[70px] lg:px-[90px] mt-[30px] mb-[30px]">
            <div className="container">
                <h2 className="text-white text-2xl font-bold pb-4">
                    Top Sellers
                </h2>

                <div className="py-[30px] gap-5 grid grid-cols-1 xl:grid-cols-3 max-h-[300px] md:max-h-[600px] lg:max-h-[700px] overflow-auto md:overflow-y-visible">
                    {/* <div>
                        <div className="flex gap-2 items-center mb-10">
                            <div className="flex items-center">
                                <div className="rounded-full counter backdrop-blur-md w-[50px] h-[50px] flex items-center justify-center text-white relative -z-0 -right-3">
                                    1
                                </div>
                                <div className="rounded-full relative z-10 group btn-gradient">
                                    <Image className="rounded-full group-hover:p-1 transition-all duration-300" src={userImage} alt="user1" width={50} height={50} />
                                    <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center text-white font-bold mb-1 mr-3 lg:mr-0">
                                    <span>
                                        Fateme Babaei
                                    </span>
                                    <span>
                                        3.2 ETH
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-gray-500 mr-3 lg:mr-0">
                                    <span className="text-sm">
                                        @monica
                                    </span>
                                    <span>
                                        $4,823
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-10">
                            <div className="flex items-center">
                                <div className="rounded-full counter backdrop-blur-md w-[50px] h-[50px] flex items-center justify-center text-white relative -z-0 -right-3">
                                    1
                                </div>
                                <div className="rounded-full relative z-10 group btn-gradient">
                                    <Image className="rounded-full group-hover:p-1 transition-all duration-300" src={userImage} alt="user1" width={50} height={50} />
                                    <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center text-white font-bold mb-1 mr-3 lg:mr-0">
                                    <span>
                                        Fateme Babaei
                                    </span>
                                    <span>
                                        3.2 ETH
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-gray-500 mr-3 lg:mr-0">
                                    <span className="text-sm">
                                        @monica
                                    </span>
                                    <span>
                                        $4,823
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-10">
                            <div className="flex items-center">
                                <div className="rounded-full counter backdrop-blur-md w-[50px] h-[50px] flex items-center justify-center text-white relative -z-0 -right-3">
                                    1
                                </div>
                                <div className="rounded-full relative z-10 group btn-gradient">
                                    <Image className="rounded-full group-hover:p-1 transition-all duration-300" src={userImage} alt="user1" width={50} height={50} />
                                    <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center text-white font-bold mb-1 mr-3 lg:mr-0">
                                    <span>
                                        Fateme Babaei
                                    </span>
                                    <span>
                                        3.2 ETH
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-gray-500 mr-3 lg:mr-0">
                                    <span className="text-sm">
                                        @monica
                                    </span>
                                    <span>
                                        $4,823
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-10">
                            <div className="flex items-center">
                                <div className="rounded-full counter backdrop-blur-md w-[50px] h-[50px] flex items-center justify-center text-white relative -z-0 -right-3">
                                    1
                                </div>
                                <div className="rounded-full relative z-10 group btn-gradient">
                                    <Image className="rounded-full group-hover:p-1 transition-all duration-300" src={userImage} alt="user1" width={50} height={50} />
                                    <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center text-white font-bold mb-1 mr-3 lg:mr-0">
                                    <span>
                                        Fateme Babaei
                                    </span>
                                    <span>
                                        3.2 ETH
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-gray-500 mr-3 lg:mr-0">
                                    <span className="text-sm">
                                        @monica
                                    </span>
                                    <span>
                                        $4,823
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-10">
                            <div className="flex items-center">
                                <div className="rounded-full counter backdrop-blur-md w-[50px] h-[50px] flex items-center justify-center text-white relative -z-0 -right-3">
                                    1
                                </div>
                                <div className="rounded-full relative z-10 group btn-gradient">
                                    <Image className="rounded-full group-hover:p-1 transition-all duration-300" src={userImage} alt="user1" width={50} height={50} />
                                    <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center text-white font-bold mb-1 mr-3 lg:mr-0">
                                    <span>
                                        Fateme Babaei
                                    </span>
                                    <span>
                                        3.2 ETH
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-gray-500 mr-3 lg:mr-0">
                                    <span className="text-sm">
                                        @monica
                                    </span>
                                    <span>
                                        $4,823
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="flex gap-2 items-center mb-10">
                            <div className="flex items-center">
                                <div className="rounded-full counter backdrop-blur-md w-[50px] h-[50px] flex items-center justify-center text-white relative -z-0 -right-3">
                                    1
                                </div>
                                <div className="rounded-full relative z-10 group btn-gradient">
                                    <Image className="rounded-full group-hover:p-1 transition-all duration-300" src={userImage} alt="user1" width={50} height={50} />
                                    <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center text-white font-bold mb-1 mr-3 lg:mr-0">
                                    <span>
                                        Fateme Babaei
                                    </span>
                                    <span>
                                        3.2 ETH
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-gray-500 mr-3 lg:mr-0">
                                    <span className="text-sm">
                                        @monica
                                    </span>
                                    <span>
                                        $4,823
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-10">
                            <div className="flex items-center">
                                <div className="rounded-full counter backdrop-blur-md w-[50px] h-[50px] flex items-center justify-center text-white relative -z-0 -right-3">
                                    1
                                </div>
                                <div className="rounded-full relative z-10 group btn-gradient">
                                    <Image className="rounded-full group-hover:p-1 transition-all duration-300" src={userImage} alt="user1" width={50} height={50} />
                                    <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center text-white font-bold mb-1 mr-3 lg:mr-0">
                                    <span>
                                        Fateme Babaei
                                    </span>
                                    <span>
                                        3.2 ETH
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-gray-500 mr-3 lg:mr-0">
                                    <span className="text-sm">
                                        @monica
                                    </span>
                                    <span>
                                        $4,823
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-10">
                            <div className="flex items-center">
                                <div className="rounded-full counter backdrop-blur-md w-[50px] h-[50px] flex items-center justify-center text-white relative -z-0 -right-3">
                                    1
                                </div>
                                <div className="rounded-full relative z-10 group btn-gradient">
                                    <Image className="rounded-full group-hover:p-1 transition-all duration-300" src={userImage} alt="user1" width={50} height={50} />
                                    <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center text-white font-bold mb-1 mr-3 lg:mr-0">
                                    <span>
                                        Fateme Babaei
                                    </span>
                                    <span>
                                        3.2 ETH
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-gray-500 mr-3 lg:mr-0">
                                    <span className="text-sm">
                                        @monica
                                    </span>
                                    <span>
                                        $4,823
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-10">
                            <div className="flex items-center">
                                <div className="rounded-full counter backdrop-blur-md w-[50px] h-[50px] flex items-center justify-center text-white relative -z-0 -right-3">
                                    1
                                </div>
                                <div className="rounded-full relative z-10 group btn-gradient">
                                    <Image className="rounded-full group-hover:p-1 transition-all duration-300" src={userImage} alt="user1" width={50} height={50} />
                                    <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center text-white font-bold mb-1 mr-3 lg:mr-0">
                                    <span>
                                        Fateme Babaei
                                    </span>
                                    <span>
                                        3.2 ETH
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-gray-500 mr-3 lg:mr-0">
                                    <span className="text-sm">
                                        @monica
                                    </span>
                                    <span>
                                        $4,823
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-10">
                            <div className="flex items-center">
                                <div className="rounded-full counter backdrop-blur-md w-[50px] h-[50px] flex items-center justify-center text-white relative -z-0 -right-3">
                                    1
                                </div>
                                <div className="rounded-full relative z-10 group btn-gradient">
                                    <Image className="rounded-full group-hover:p-1 transition-all duration-300" src={userImage} alt="user1" width={50} height={50} />
                                    <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center text-white font-bold mb-1 mr-3 lg:mr-0">
                                    <span>
                                        Fateme Babaei
                                    </span>
                                    <span>
                                        3.2 ETH
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-gray-500 mr-3 lg:mr-0">
                                    <span className="text-sm">
                                        @monica
                                    </span>
                                    <span>
                                        $4,823
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="flex gap-2 items-center mb-10">
                            <div className="flex items-center">
                                <div className="rounded-full counter backdrop-blur-md w-[50px] h-[50px] flex items-center justify-center text-white relative -z-0 -right-3">
                                    1
                                </div>
                                <div className="rounded-full relative z-10 group btn-gradient">
                                    <Image className="rounded-full group-hover:p-1 transition-all duration-300" src={userImage} alt="user1" width={50} height={50} />
                                    <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center text-white font-bold mb-1 mr-3 lg:mr-0">
                                    <span>
                                        Fateme Babaei
                                    </span>
                                    <span>
                                        3.2 ETH
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-gray-500 mr-3 lg:mr-0">
                                    <span className="text-sm">
                                        @monica
                                    </span>
                                    <span>
                                        $4,823
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-10">
                            <div className="flex items-center">
                                <div className="rounded-full counter backdrop-blur-md w-[50px] h-[50px] flex items-center justify-center text-white relative -z-0 -right-3">
                                    1
                                </div>
                                <div className="rounded-full relative z-10 group btn-gradient">
                                    <Image className="rounded-full group-hover:p-1 transition-all duration-300" src={userImage} alt="user1" width={50} height={50} />
                                    <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center text-white font-bold mb-1 mr-3 lg:mr-0">
                                    <span>
                                        Fateme Babaei
                                    </span>
                                    <span>
                                        3.2 ETH
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-gray-500 mr-3 lg:mr-0">
                                    <span className="text-sm">
                                        @monica
                                    </span>
                                    <span>
                                        $4,823
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-10">
                            <div className="flex items-center">
                                <div className="rounded-full counter backdrop-blur-md w-[50px] h-[50px] flex items-center justify-center text-white relative -z-0 -right-3">
                                    1
                                </div>
                                <div className="rounded-full relative z-10 group btn-gradient">
                                    <Image className="rounded-full group-hover:p-1 transition-all duration-300" src={userImage} alt="user1" width={50} height={50} />
                                    <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center text-white font-bold mb-1 mr-3 lg:mr-0">
                                    <span>
                                        Fateme Babaei
                                    </span>
                                    <span>
                                        3.2 ETH
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-gray-500 mr-3 lg:mr-0">
                                    <span className="text-sm">
                                        @monica
                                    </span>
                                    <span>
                                        $4,823
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-10">
                            <div className="flex items-center">
                                <div className="rounded-full counter backdrop-blur-md w-[50px] h-[50px] flex items-center justify-center text-white relative -z-0 -right-3">
                                    1
                                </div>
                                <div className="rounded-full relative z-10 group btn-gradient">
                                    <Image className="rounded-full group-hover:p-1 transition-all duration-300" src={userImage} alt="user1" width={50} height={50} />
                                    <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center text-white font-bold mb-1 mr-3 lg:mr-0">
                                    <span>
                                        Fateme Babaei
                                    </span>
                                    <span>
                                        3.2 ETH
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-gray-500 mr-3 lg:mr-0">
                                    <span className="text-sm">
                                        @monica
                                    </span>
                                    <span>
                                        $4,823
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-10">
                            <div className="flex items-center">
                                <div className="rounded-full counter backdrop-blur-md w-[50px] h-[50px] flex items-center justify-center text-white relative -z-0 -right-3">
                                    1
                                </div>
                                <div className="rounded-full relative z-10 group btn-gradient">
                                    <Image className="rounded-full group-hover:p-1 transition-all duration-300" src={userImage} alt="user1" width={50} height={50} />
                                    <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center text-white font-bold mb-1 mr-3 lg:mr-0">
                                    <span>
                                        Fateme Babaei
                                    </span>
                                    <span>
                                        3.2 ETH
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-gray-500 mr-3 lg:mr-0">
                                    <span className="text-sm">
                                        @monica
                                    </span>
                                    <span>
                                        $4,823
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div> */}


                    {topSellers.map((coin:any) => (
                        <>
                            <div  key={coin.id} className="flex gap-2 items-center mb-10">
                                <div className="flex items-center">
                                    <div className="rounded-full counter backdrop-blur-md w-[50px] h-[50px] flex items-center justify-center text-white relative -z-0 -right-3">
                                        {coin.market_cap_rank}
                                    </div>
                                    <div className="rounded-full relative z-10 group btn-gradient">
                                        <img className="rounded-full group-hover:p-1 transition-all duration-300" src={coin.image} alt=""  width={50} height={50}/>
                                        {/* <Image className="rounded-full group-hover:p-1 transition-all duration-300" src={coin.image} alt="user1" width={50} height={50} /> */}
                                        <HiCheckCircle className="absolute bottom-0 right-0 text-primary-400 text-xl" />
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex justify-between items-center text-white font-bold mb-1 mr-3 lg:mr-0">
                                        <span>
                                           {coin.name}
                                        </span>
                                        <span>
                                            3.2 ETH
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center text-gray-500 mr-3 lg:mr-0">
                                        <span className="text-sm">
                                            @monica
                                        </span>
                                        <span>
                                           {coin.current_price} $
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopSeller