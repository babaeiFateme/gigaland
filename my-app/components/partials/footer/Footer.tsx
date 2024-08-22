import Link from 'next/link'
import { BiArrowFromRight, BiArrowToRight } from 'react-icons/bi'
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaArrowRight, FaFacebookF } from 'react-icons/fa6'
import { MdMail } from 'react-icons/md'

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-20 text-white py-[40px]">
                    <div className="col-span-2">
                        <div className='mb-5 text-white text-xl font-bold'>Get the latest updates</div>
                        <div className=' text-gray-600 font-bold'>Signup for our newsletter to get the latest updates in your inbox.</div>
                        <div className='relative max-w-[300px] mt-5'>
                            <input type="text" placeholder="Enter Your Email..." className="placeholder:text-white placeholder:text-sm bg-lightGlass min-h-[30px] w-full pl-2 py-2 pr-5 rounded-md focus:border-0 active:border-0 focus-visible:border-0 focus-visible:outline-none"/>
                            <button type='button' className='btn-gradient px-4 h-full rounded-tr-md rounded-br-md absolute top-0 right-0'>
                                <FaArrowRight />

                            </button>
                        </div>
                    </div>

                    <div className='col-span-1'>
                        <div className='mb-8 text-xl'>
                            Marketplace
                        </div>
                        <ul>
                            <li className='mb-3 text-gray-400 hover:text-primary-400'>
                                <Link href="/">All NFTs</Link>
                            </li>
                            <li className='mb-3 text-gray-400 hover:text-primary-400'>
                                <Link href="/">Art</Link>
                            </li>
                            <li className='mb-3 text-gray-400 hover:text-primary-400'>
                                <Link href="/">Music</Link>
                            </li>
                            <li className='mb-3 text-gray-400 hover:text-primary-400'>
                                <Link href="/">Domain Names</Link>
                            </li>
                            <li className='mb-3 text-gray-400 hover:text-primary-400'>
                                <Link href="/">Virtual World</Link>
                            </li>
                            <li className='mb-3 text-gray-400 hover:text-primary-400'>
                                <Link href="/">Collectibles</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='col-span-1'>
                        <div className='mb-8 text-xl'>
                            Resources
                        </div>
                        <ul>
                            <li className='mb-3 text-gray-400 hover:text-primary-400'>
                                <Link href="/">Help Center</Link>
                            </li>
                            <li className='mb-3 text-gray-400 hover:text-primary-400'>
                                <Link href="/">Partners</Link>
                            </li>
                            <li className='mb-3 text-gray-400 hover:text-primary-400'>
                                <Link href="/">Suggestions</Link>
                            </li>
                            <li className="mb-3 text-gray-400 hover:text-primary-400">
                                <Link href="/">Discord</Link>
                            </li>
                            <li className='mb-3 text-gray-400 hover:text-primary-400'>
                                <Link href="/">Docs</Link>
                            </li>
                            <li className='mb-3 text-gray-400 hover:text-primary-400'>
                                <Link href="/">Newsletter</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-span-1'>
                        <div className='mb-8 text-xl'>
                            Community
                        </div>
                        <ul>
                            <li className='mb-3 text-gray-400 hover:text-primary-400'>
                                <Link href="/">Community</Link>
                            </li>
                            <li className='mb-3 text-gray-400 hover:text-primary-400'>
                                <Link href="/">Documentation</Link>
                            </li>
                            <li className='mb-3 text-gray-400 hover:text-primary-400'>
                                <Link href="/">Brand Assets</Link>
                            </li>
                            <li className='mb-3 text-gray-400 hover:text-primary-400'>
                                <Link href="/">Blog</Link>
                            </li>
                            <li className='mb-3 text-gray-400 hover:text-primary-400'>
                                <Link href="/">Forum</Link>
                            </li>
                            <li className='mb-3 text-gray-400 hover:text-primary-400'>
                                <Link href="/">Mailing List</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='col-span-2'>
                        <div className='mb-8 text-xl'>Join the community</div>
                        <ul className='flex gap-2 items-center'>
                            <li className='bg-midGlass rounded-md p-2 group hover:bg-white transition-all duration-500'>
                                <Link href="/">
                                    <FaFacebookF className='group-hover:text-primary-300' />
                                </Link>
                            </li>
                            <li className='bg-midGlass rounded-md p-2 group hover:bg-white transition-all duration-500'>
                                <Link href="/">
                                    <BsTwitter className='group-hover:text-primary-300' />
                                </Link>
                            </li>
                            <li className='bg-midGlass rounded-md p-2 group hover:bg-white transition-all duration-500'>
                                <Link href="/">
                                    <BsInstagram className='group-hover:text-primary-300' />
                                </Link>
                            </li>
                            <li className='bg-midGlass rounded-md p-2 group hover:bg-white transition-all duration-500'>
                                <Link href="/">
                                    <BsYoutube className='group-hover:text-primary-300' />
                                </Link>
                            </li>
                            <li className='bg-midGlass rounded-md p-2 group hover:bg-white transition-all duration-500'>
                                <Link href="/">
                                    <MdMail className='group-hover:text-primary-300' />
                                </Link>
                            </li>
                        </ul>
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