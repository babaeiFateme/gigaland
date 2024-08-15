import { FaRegImage } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { LiaAddressCard } from "react-icons/lia";
import { FiGrid } from "react-icons/fi";


const PopularCategories = () => {
    return (
        <>
            <h2 className="text-white font-bold text-xl my-[40px]">
                Popular Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-[20px]">
                <div className="p-5 flex items-center justify-center relative bg-primary-500 rounded-lg hover:bg-primary-900 transition delay-150 ease-in-out">
                    <FaRegImage className="text-primary-600 text-[90px]" />
                    <span className="absolute text-white text-sm font-bold">Art</span>
                </div>
                <div className="p-5 flex items-center justify-center relative bg-primary-500 rounded-lg hover:bg-primary-900 transition delay-150 ease-in-out">
                    <FaMusic className="text-primary-600 text-[90px]" />
                    <span className="absolute text-white text-sm font-bold">Music</span>
                </div>
                <div className="p-5 flex items-center justify-center relative bg-primary-500 rounded-lg hover:bg-primary-900 transition delay-150 ease-in-out">
                    <FaSearch className="text-primary-600 text-[90px]" />
                    <span className="absolute text-white text-sm font-bold">Domain Names</span>
                </div>
                <div className="p-5 flex items-center justify-center relative bg-primary-500 rounded-lg hover:bg-primary-900 transition delay-150 ease-in-out">
                    <BiWorld className="text-primary-600 text-[90px]" />
                    <span className="absolute text-white text-sm font-bold">Virtual Worlds</span>
                </div>
                <div className="p-5 flex items-center justify-center relative bg-primary-500 rounded-lg hover:bg-primary-900 transition delay-150 ease-in-out">
                    <LiaAddressCard className="text-primary-600 text-[90px]" />
                    <span className="absolute text-white text-sm font-bold">Trading Cards</span>
                </div>
                <div className="p-5 flex items-center justify-center relative bg-primary-500 rounded-lg hover:bg-primary-900 transition delay-150 ease-in-out">
                    <FiGrid className="text-primary-600 text-[90px]" />
                    <span className="absolute text-white text-sm font-bold">More Categories</span>
                </div>
            </div>
        </>
    )
}

export default PopularCategories