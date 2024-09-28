import Button from "@/components/common/button/Button"
import HeroSlider from "./HeroSlider"

const Hero = () => {
    return (
        <div className="p-[10px] md:p-[20px] lg:p-[30px] gap-[4px] md:gap-[20px]  bg-primary-600 text-white container mx-auto rounded-xl mb-[40px] hero">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-10 xl:gap-20">
                <div className="py-[30px] lg:px-[20px] flex flex-col justify-center">
                    <div>
                        <h1 className="text-2xl md:text-5xl font-bold">
                            <span>
                                Explore, collect, and sell extraordinary
                            </span>
                            <span className="ml-2 text-2xl md:text-5xl font-bold text-gradient">
                                NFTs
                            </span>
                        </h1>
                    </div>
                    <div className="text-gray-500 font-semibold text-xl max-w-[600px] my-8">
                        Welcome to the future, you can buy and sell awesome artworks form here. The world largest digital marketplace for non-fungible tokens.
                    </div>
                    <div className="grid grid-cols-2 gap-4 max-w-[300px] mt-5">
                        <Button type="button" size="medium" className="btn-gradient font-bold text-white bg-primary-500  rounded-lg hero-button">
                            Explore
                        </Button>
                        <Button type="button" size="medium" className="text-white font-bold text-primary-400 bg-primary-500 py-3 px-10 rounded-lg hero-button">
                            Sell
                        </Button>
                    </div>
                </div>
                <div className="py-[30px] mr-[10px]">
                    <HeroSlider />
                </div>
            </div>
        </div>
    )
}

export default Hero