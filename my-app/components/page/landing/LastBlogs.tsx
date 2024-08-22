import Image from 'next/image'
import news1 from "@/public/images/landing/blogs/news-b1.jpg"
import news2 from "@/public/images/landing/blogs/news-b2.jpg"
import news3 from "@/public/images/landing/blogs/news-b3.jpg"
const LastBlogs = () => {
    return (
        <section className='my-[50px] mb-[20px] md:mb-[60px]'>
            <h2 className='text-white font-bold text-xl my-[40px]'>Latest News</h2>
            <div className="grid gap-[10px] md:gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="">
                    <div className='relative'>
                        <Image
                            className='aspect-[700/467] rounded-xl'
                            src={news1}
                            width={700}
                            height={467}
                            alt="news1"
                        />
                        <span className='absolute top-4 left-4 px-3 py-1 rounded-md bg-primary-900 text-white text-sm'>
                            Tips & Tricks
                        </span>
                    </div>

                    <div className='text-gray-300 my-[30px] text-sm'>October 28, 2020</div>

                    <h3 className='text-white text-xl mb-3 font-semibold'>How to create NFT item</h3>
                    <div className='text-white mb-3'>
                        The NFT can be associated with a particular digital or physical asset such as images, art, music, and sport highlights and may confer licensing rights....
                    </div>
                </div>
                <div className="">
                    <div className='relative'>
                        <Image
                            className='aspect-[700/467] rounded-xl'
                            src={news2}
                            width={700}
                            height={467}
                            alt="news1"
                        />
                        <span className='absolute top-4 left-4 px-3 py-1 rounded-md bg-primary-900 text-white text-sm'>
                            Tips & Tricks
                        </span>
                    </div>

                    <div className='text-gray-300 my-[30px] text-sm'>October 28, 2020</div>

                    <h3 className='text-white text-xl mb-3 font-semibold'>How to create NFT item</h3>
                    <div className='text-white mb-3'>
                        The NFT can be associated with a particular digital or physical asset such as images, art, music, and sport highlights and may confer licensing rights....
                    </div>
                </div>
                <div className="">
                    <div className='relative'>
                        <Image
                            className='aspect-[700/467] rounded-xl'
                            src={news3}
                            width={700}
                            height={467}
                            alt="news1"
                        />
                        <span className='absolute top-4 left-4 px-3 py-1 rounded-md bg-primary-900 text-white text-sm'>
                            Tips & Tricks
                        </span>

                    </div>


                    <div className='text-gray-300 my-[30px] text-sm'>October 28, 2020</div>

                    <h3 className='text-white text-xl mb-3 font-semibold'>How to create NFT item</h3>
                    <div className='text-white mb-3'>
                        The NFT can be associated with a particular digital or physical asset such as images, art, music, and sport highlights and may confer licensing rights....
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LastBlogs