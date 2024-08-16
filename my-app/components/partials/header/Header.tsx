
import React from "react";
import AcmeLogo from "@/public/images/landing/author/author-9.jpg";
import { LuAlignJustify } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const menuItems = [
        "Home",
        "Profile",
        "Activity",
        "Help",
    ];

    return (
        <nav className="text-white fixed top-0 py-4 bg-primary-950 z-50 w-full mx-auto flex justify-between items-center px-[26px] lg:px-20">
            <button  type="button" className="flex justify-start lg:hidden " >
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
                        <div>
                            <Image src={AcmeLogo} alt="rayka" width={40} height={40} />
                            <span className="font-bold text-inherit">ACME</span>
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                    <ul className="flex gap-[20px] items-center">
                        {menuItems.map((item, index) => (
                            <li key={`${item}-${index}`}>
                                <Link
                                    className="w-full"
                                    color={
                                        index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                                    }
                                    href="#"

                                >
                                    {item}
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



            <ul className="hidden">
                {menuItems.map((item, index) => (
                    <li key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"

                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
export default Header
