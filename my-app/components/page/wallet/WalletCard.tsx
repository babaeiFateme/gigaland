import Image from 'next/image'
import brand1 from "@/public/images/landing/1.png"
import brand2 from "@/public/images/landing/2.png"
import brand3 from "@/public/images/landing/3.png"
import brand4 from "@/public/images/landing/4.png"
import brand5 from "@/public/images/landing/5.png"
import brand6 from "@/public/images/landing/6.png"

const walletCard = () => {
    return (
        <div className="container mx-auto max-w-[1300px]">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] px-6">
                <div className="p-[10px] md:p-[20px] lg:p-[30px] transition ease-in-out delay-150 bg-primary-850 hover:bg-primary-600 flex flex-col  gap-2 rounded-2xl brand-card">
                    <Image
                        src={brand1}
                        width={70}
                        height={70}
                        alt="Picture of the author"
                    />
                    <h3 className='text-white text-sm'>Metamask</h3>
                    <div className='text-gray-400 text-sm my-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, velit!
                    </div>
                </div>
                <div className="p-[10px] md:p-[20px] lg:p-[30px] transition ease-in-out delay-150 bg-primary-850 hover:bg-primary-600  gap-2 rounded-2xl brand-card">
                    <Image
                        src={brand2}
                        width={70}
                        height={70}
                        alt="Bitski"
                    />
                    <h3 className='text-white text-sm'>Bitski</h3>
                    <div className='text-gray-400 text-sm my-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, velit!
                    </div>
                </div>
                <div className="p-[10px] md:p-[20px] lg:p-[30px] transition ease-in-out delay-150 bg-primary-850 hover:bg-primary-600  gap-2 rounded-2xl brand-card">
                    <Image
                        src={brand3}
                        width={70}
                        height={70}
                        alt="Fortmatic"
                    />
                    <h3 className='text-white text-sm'>Fortmatic</h3>
                    <div className='text-gray-400 text-sm my-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, velit!
                    </div>
                </div>
                <div className="p-[10px] md:p-[20px] lg:p-[30px] transition ease-in-out delay-150 bg-primary-850 hover:bg-primary-600  gap-2 rounded-2xl brand-card">
                    <Image
                        src={brand4}
                        width={70}
                        height={70}
                        alt="WalletConnect"
                    />
                    <h3 className='text-white text-sm'>WalletConnect</h3>
                    <div className='text-gray-400 text-sm my-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, velit!
                    </div>
                </div>
                <div className="p-[10px] md:p-[20px] lg:p-[30px] transition ease-in-out delay-150 bg-primary-850 hover:bg-primary-600  gap-2 rounded-2xl brand-card">
                    <Image
                        src={brand5}
                        width={70}
                        height={70}
                        alt="Coinbase Wallet"
                    />
                    <h3 className='text-white text-sm'>Coinbase Wallet</h3>
                    <div className='text-gray-400 text-sm my-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, velit!
                    </div>
                </div>
                <div className="p-[10px] md:p-[20px] lg:p-[30px] transition ease-in-out delay-150 bg-primary-850 hover:bg-primary-600 transition-all  gap-2 rounded-2xl brand-card">
                    <Image
                        src={brand6}
                        width={70}
                        height={70}
                        alt="Arkane"
                    />
                    <h3 className='text-white text-sm'>Arkane</h3>
                    <div className='text-gray-400 text-sm my-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, velit!
                    </div>
                </div>
                <div className="p-[10px] md:p-[20px] lg:p-[30px] transition ease-in-out delay-150 bg-primary-850 hover:bg-primary-600  gap-2 rounded-2xl brand-card">
                    <Image
                        src={brand5}
                        width={70}
                        height={70}
                        alt="Coinbase Wallet"
                    />
                    <h3 className='text-white text-sm'>Coinbase Wallet</h3>
                    <div className='text-gray-400 text-sm my-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, velit!
                    </div>
                </div>
                <div className="p-[10px] md:p-[20px] lg:p-[30px] transition ease-in-out delay-150 bg-primary-850 hover:bg-primary-600 transition-all  gap-2 rounded-2xl brand-card">
                    <Image
                        src={brand6}
                        width={70}
                        height={70}
                        alt="Arkane"
                    />
                    <h3 className='text-white text-sm'>Arkane</h3>
                    <div className='text-gray-400 text-sm my-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, velit!
                    </div>
                </div>
                <div className="p-[10px] md:p-[20px] lg:p-[30px] transition ease-in-out delay-150 bg-primary-850 hover:bg-primary-600  gap-2 rounded-2xl brand-card">
                    <Image
                        src={brand5}
                        width={70}
                        height={70}
                        alt="Coinbase Wallet"
                    />
                    <h3 className='text-white text-sm'>Coinbase Wallet</h3>
                    <div className='text-gray-400 text-sm my-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, velit!
                    </div>
                </div>
                <div className="p-[10px] md:p-[20px] lg:p-[30px] transition ease-in-out delay-150 bg-primary-850 hover:bg-primary-600 transition-all  gap-2 rounded-2xl brand-card">
                    <Image
                        src={brand6}
                        width={70}
                        height={70}
                        alt="Arkane"
                    />
                    <h3 className='text-white text-sm'>Arkane</h3>
                    <div className='text-gray-400 text-sm my-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, velit!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default walletCard