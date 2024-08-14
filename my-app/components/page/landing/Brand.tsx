import Image from 'next/image'
import brand1 from "@/public/images/landing/1.png"
import brand2 from "@/public/images/landing/2.png"
import brand3 from "@/public/images/landing/3.png"
import brand4 from "@/public/images/landing/4.png"
import brand5 from "@/public/images/landing/5.png"
import brand6 from "@/public/images/landing/6.png"

const Brand = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[20px]">
                <div className="p-[10px] md:p-[20px] lg:p-[30px] bg-primary-850 hover:bg-primary-600 flex flex-col items-center justify-center gap-2 rounded-xl brand-card">
                    <Image
                        src={brand1}
                        width={60}
                        height={60}
                        alt="Picture of the author"
                    />
                    <h3 className='text-white text-sm'>Metamask</h3>
                </div>
                <div className="p-[10px] md:p-[20px] lg:p-[30px] transition ease-in-out delay-150 bg-primary-850 hover:bg-primary-600 flex flex-col items-center justify-center gap-2 rounded-xl brand-card">
                    <Image
                        src={brand2}
                        width={60}
                        height={60}
                        alt="Bitski"
                    />
                    <h3 className='text-white text-sm'>Bitski</h3>
                </div>
                <div className="p-[10px] md:p-[20px] lg:p-[30px] transition ease-in-out delay-150 bg-primary-850 hover:bg-primary-600 flex flex-col items-center justify-center gap-2 rounded-xl brand-card">
                    <Image
                        src={brand3}
                        width={60}
                        height={60}
                        alt="Fortmatic"
                    />
                    <h3 className='text-white text-sm'>Fortmatic</h3>
                </div>
                <div className="p-[10px] md:p-[20px] lg:p-[30px]transition ease-in-out delay-150 bg-primary-850 hover:bg-primary-600 flex flex-col items-center justify-center gap-2 rounded-xl brand-card">
                    <Image
                        src={brand4}
                        width={60}
                        height={60}
                        alt="WalletConnect"
                    />
                    <h3 className='text-white text-sm'>WalletConnect</h3>
                </div>
                <div className="p-[10px] md:p-[20px] lg:p-[30px]transition ease-in-out delay-150 bg-primary-850 hover:bg-primary-600 flex flex-col items-center justify-center gap-2 rounded-xl brand-card">
                    <Image
                        src={brand5}
                        width={60}
                        height={60}
                        alt="Coinbase Wallet"
                    />
                    <h3 className='text-white text-sm'>Coinbase Wallet</h3>
                </div>
                <div className="p-[10px] md:p-[20px] lg:p-[30px]transition ease-in-out delay-150 bg-primary-850 hover:bg-primary-600 transition-all flex flex-col items-center justify-center gap-2 rounded-xl brand-card">
                    <Image
                        src={brand6}
                        width={60}
                        height={60}
                        alt="Arkane"
                    />
                    <h3 className='text-white text-sm'>Arkane</h3>
                </div>
            </div>
        </div>
    )
}

export default Brand