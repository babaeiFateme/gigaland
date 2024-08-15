const Hero = () => {
    return (
        <div className="p-[10px] md:p-[20px] gap-[20px] bg-primary-600 text-white container mx-auto rounded-xl mb-[40px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="py-[30px] px-[50px]">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold">
                            Explore, collect, and sell extraordinary
                        </h1>
                        <span className="text-2xl md:text-4xl font-bold">
                            NFTs
                        </span>
                    </div>
                    <div className="text-gray-500 font-semibold text-xl max-w-[400px] my-8">
                        Welcome to the future, you can buy and sell awesome artworks form here. The world largest digital marketplace for non-fungible tokens.
                    </div>
                    <div className="grid grid-cols-2 gap-4 max-w-[300px] mt-5">
                        <button type="button" className="text-white bg-primary-500 py-3 px-10 rounded-lg">Explore</button>
                        <button type="button" className="text-white bg-primary-500 py-3 px-10 rounded-lg">Sell</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero