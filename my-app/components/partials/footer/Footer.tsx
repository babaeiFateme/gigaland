import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-20 text-white py-[40px]">
                    <div className="col-span-2">
                        <div className='mb-5 text-white text-xl font-bold'>Get the latest updates</div>
                        <div className=' text-gray-600 font-bold'>Signup for our newsletter to get the latest updates in your inbox.</div>
                    </div>

                    <div className='col-span-1'>
                        <div className='mb-8 text-xl'>
                            Marketplace
                        </div>
                        <ul>
                            <li className='mb-3 text-gray-400'>
                                <Link href="/">All NFTs</Link>
                            </li>
                            <li className='mb-3 text-gray-400'>
                                <Link href="/">Art</Link>
                            </li>
                            <li className='mb-3 text-gray-400'>
                                <Link href="/">Music</Link>
                            </li>
                            <li className='mb-3 text-gray-400'>
                                <Link href="/">Domain Names</Link>
                            </li>
                            <li className='mb-3 text-gray-400'>
                                <Link href="/">Virtual World</Link>
                            </li>
                            <li className='mb-3 text-gray-400'>
                                <Link href="/">Collectibles</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='col-span-1'>
                        <div className='mb-8 text-xl'>
                            Resources
                        </div>
                        <ul>
                            <li className='mb-3 text-gray-400'>
                                <Link href="/">Help Center</Link>
                            </li>
                            <li className='mb-3 text-gray-400'>
                                <Link href="/">Partners</Link>
                            </li>
                            <li className='mb-3 text-gray-400'>
                                <Link href="/">Suggestions</Link>
                            </li>
                            <li className="mb-3 text-gray-400">
                                <Link href="/">Discord</Link>
                            </li>
                            <li className='mb-3 text-gray-400'>
                                <Link href="/">Docs</Link>
                            </li>
                            <li className='mb-3 text-gray-400'>
                                <Link href="/">Newsletter</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-span-1'>
                        <div className='mb-8 text-xl'>
                            Community
                        </div>
                        <ul>
                            <li className='mb-3 text-gray-400'>
                                <Link href="/">Community</Link>
                            </li>
                            <li className='mb-3 text-gray-400'>
                                <Link href="/">Documentation</Link>
                            </li>
                            <li className='mb-3 text-gray-400'>
                                <Link href="/">Brand Assets</Link>
                            </li>
                            <li className='mb-3 text-gray-400'>
                                <Link href="/">Blog</Link>
                            </li>
                            <li className='mb-3 text-gray-400'>
                                <Link href="/">Forum</Link>
                            </li>
                            <li className='mb-3 text-gray-400'>
                                <Link href="/">Mailing List</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='col-span-2'>
                        <div className='mb-8 text-xl'>Join the community</div>
                    </div>
                </div>
            </div>
            <div className='text-center text-white border-t-[1px] border-gray-600 py-6'>
                © Copyright 2023 - Gigaland by Designesia
            </div>
        </footer>
    )
}

export default Footer