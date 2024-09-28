
'use client'
import Link from 'next/link'
import { BiArrowFromBottom, BiArrowFromRight, BiArrowFromTop, BiArrowToRight, BiArrowToTop } from 'react-icons/bi'
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaArrowRight, FaFacebookF } from 'react-icons/fa6'
import { MdMail } from 'react-icons/md'
import SocialLinkContent from '@/components/content/SocialLinkContent'
import SocialLink from '@/components/common/social-link/SocialLink'
import Button from '@/components/common/button/Button'

const Footer = () => {

    const ToTopHandler =()=>{
        window.scrollTo({top:0,left:0 , behavior:'smooth'})
    }
    return (

        <>
            <footer>
                <div className="container md:mx-auto">
                    <div className=" mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-20 text-white py-[40px]">
                        <div className="col-span-2">
                            <div className='mb-5 text-white text-xl font-bold'>Get the latest updates</div>
                            <div className=' text-gray-600 font-bold'>Signup for our newsletter to get the latest updates in your inbox.</div>
                            <div className='relative max-w-[300px] mt-5'>
                                <input type="text" placeholder="Enter Your Email..." className="placeholder:text-white placeholder:text-sm bg-lightGlass min-h-[30px] w-full pl-2 py-2 pr-5 rounded-md focus:border-0 active:border-0 focus-visible:border-0 focus-visible:outline-none" />
                                <Button type='button' className='btn-gradient px-4 h-full rounded-tr-md rounded-br-md absolute top-0 right-0'>
                                    <FaArrowRight />
                                </Button>
                            </div>
                        </div>

                        <div className='col-span-1'>
                            <div className='mb-8 text-xl'>
                                Marketplace
                            </div>
                            <SocialLink socialArray={SocialLinkContent} />
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
            <Button className='text-primary-950 bg-primary-100 !p-0 w-[60px] z-50 rounded-sm d-block aspect-square fixed left-5 bottom-10' type='button' onClick={()=>ToTopHandler()} >
                <BiArrowFromBottom className='text-3xl' />
            </Button>
        </>
    )
}

export default Footer