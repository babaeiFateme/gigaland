import Image from "next/image"
import Link from "next/link"
import appStore from "@/public/images/landing/download-appstore.png"
import playStore from "@/public/images/landing/download-playstore.png"

const ShareApp = () => {
    return (
        <div className='backgroundContainer'>
            <div className="background" />
            <div className="absolute z-30 top-1/2 flex flex-col md:flex-row justify-center md:justify-between w-full gap-2 items-center container mx-auto">
                <h2 className="text-white text-2xl font-bold ">
                    Download Gigaland app for your mobile.
                </h2>
                <div className="flex gap-2 items-center justify-normal md:justify-end">
                    <Link href="/">
                        <Image src={appStore} className="max-w-[150px]" />
                    </Link>
                    <Link href="/">
                        <Image src={playStore} className="max-w-[150px]" />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ShareApp