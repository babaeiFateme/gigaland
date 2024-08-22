'use client'
import { MdClose } from "react-icons/md";


import React, { useState } from "react";
import AcmeLogo from "@/public/images/landing/author/author-9.jpg";
import { LuAlignJustify } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const menuItems = [
        { name: "Home", route: "/" },
        { name: "Profile", route: "/profile" },
        { name: "Wallet", route: "/wallet" },
    ];
    const toggleMenus = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <nav className="text-white fixed top-0 py-4 bg-primary-950 z-50 w-full mx-auto flex justify-between items-center px-[26px] lg:px-20">
            <button type="button" className="flex justify-start lg:hidden" onClick={() => toggleMenus()} >
                <LuAlignJustify className="text-white text-lg font-bold" />
            </button>

            <div className="lg:hidden pr-3 justify-between flex">
                <div className="flex gap-2 items-center">
                    <Image src={AcmeLogo} alt="rayka" width={40} height={40} />
                    <span className="font-bold text-inherit">ACME</span>
                </div>
            </div>

            <div className="hidden lg:block container mx-auto">
                <div className="hidden lg:flex gap-4 justify-between container mx-auto">
                    <div className="flex gap-[20px] items-center">
                        <div className="flex gap-2 items-center">
                            <Image src={AcmeLogo} alt="rayka" width={40} height={40} />
                            <span className="font-bold text-inherit">ACME</span>
                        </div>
                        <div>
                            <input type="text" placeholder="search item here..."
                                className="header-input placeholder:text-white placeholder:text-sm bg-lightGlass min-h-[30px] w-full max-w-[400px] px-2 py-2 rounded-md focus:border-0 active:border-0 focus-visible:border-0 focus-visible:outline-none" />
                        </div>
                    </div>
                    <ul className="flex gap-[20px] items-center">
                        {menuItems.map((item, index) => (
                            <li key={`${item}-${index}`}>
                                <Link
                                    className="relative w-full before:content-normal before:absolute before:-bottom-3 before:h-[3px] transition duration-1000 before:transition-all before:duration-1000 before:left-0 before:bg-primary-300 before:w-0 before:block hover:before:w-full"
                                    color={
                                        index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                                    }
                                    href={`${item.route}`}

                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <button className="btn-gradient font-bold text-white rounded-lg px-4 py-2" type="button">
                                Connect wallet
                            </button>
                        </li>
                    </ul>
                </div>
            </div>


            <div className={`absolute left-0 top-0 h-screen bg-primary-950 w-[300px] ${toggleMenu === false ? 'hidden' : "block"}`}>
                <div className="flex justify-between gap-2 items-center px-2 py-4 counter">
                    <div className="pr-3 justify-between flex">
                        <div className="flex gap-2 items-center">
                            <Image src={AcmeLogo} alt="rayka" width={40} height={40} />
                            <span className="font-bold text-inherit">ACME</span>
                        </div>
                    </div>
                    <button type="button" onClick={() => toggleMenus()}>
                        <MdClose className="text-white text-lg" />
                    </button>
                </div>
                <ul className=''>
                    {menuItems.map((item, index) => (
                        <li className="p-[10px] my-4" key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color={
                                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                href={`${item.route}`}

                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav >
    );
}
export default Header
