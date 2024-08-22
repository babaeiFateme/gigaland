const page = () => {
    return (
        <form >
            <div className="grid md:grid-cols-2 gap-2 my-[150px] container mx-auto">
                <div className="flex flex-col gap-2">
                    <div className="relative flex gap-3 flex-col">
                        <label htmlFor="username" className="text-white min-w-[150px]">Username</label>
                        <input type="text" placeholder="your username" className="header-input placeholder:text-gray-400  placeholder:text-sm bg-lightGlass min-h-[30px] w-full max-w-[400px] px-2 py-2 rounded-md focus:border-0 active:border-0 focus-visible:border-0 focus-visible:outline-none" id="username" name="username" />
                    </div>
                    <div className="relative flex gap-3 flex-col">
                        <label htmlFor="customUrl" className="text-white min-w-[150px]" >Custom Url</label>
                        <input type="text" placeholder="your custom url" className="header-input placeholder;text-gray-400 placeholder:text-sm bg-lightGlass min-h-[30px] w-full max-w-[400px] px-2 py-2 rounded-md focus:border-0 active:border-0 focus-visible:border-0 focus-visible:outline-none" id="customUrl" name="customUrl" />
                    </div>
                    <div className="relative flex gap-3 flex-col">
                        <label htmlFor="bio" className="text-white min-w-[150px]">Bio</label>
                        <input type="text" placeholder="your bio" className="header-input placeholder;text-gray-400 placeholder:text-sm bg-lightGlass min-h-[30px] w-full max-w-[400px] px-2 py-2 rounded-md focus:border-0 active:border-0 focus-visible:border-0 focus-visible:outline-none" id="bio" name="bio" />
                    </div>
                    <div className="relative flex gap-3 flex-col">
                        <label htmlFor="EmailAddress" className="text-white min-w-[150px]">Email Address</label>
                        <input type="text" placeholder="your email" className="header-input placeholder;text-gray-400 placeholder:text-sm bg-lightGlass min-h-[30px] w-full max-w-[400px] px-2 py-2 rounded-md focus:border-0 active:border-0 focus-visible:border-0 focus-visible:outline-none" id="EmailAddress" name="EmailAddress" />
                    </div>
                    <div className="relative flex gap-3 flex-col">
                        <label htmlFor="yourSite" className="text-white min-w-[150px]">Your Site</label>
                        <input type="text" placeholder="your site" className="header-input placeholder;text-gray-400 placeholder:text-sm bg-lightGlass min-h-[30px] w-full max-w-[400px] px-2 py-2 rounded-md focus:border-0 active:border-0 focus-visible:border-0 focus-visible:outline-none" id="yourSite" name="yourSite" />
                    </div>
                    <div className="relative flex gap-3 flex-col">
                        <label htmlFor="TwitterUsername" className="text-white min-w-[150px]">Twitter Username </label>
                        <input type="text" placeholder="your twitter url" className="header-input placeholder;text-gray-400 placeholder:text-sm bg-lightGlass min-h-[30px] w-full max-w-[400px] px-2 py-2 rounded-md focus:border-0 active:border-0 focus-visible:border-0 focus-visible:outline-none" id="TwitterUsername" name="TwitterUsername" />
                    </div>
                    <div className="relative flex gap-3 flex-col">
                        <label htmlFor="instagram" className="text-white min-w-[150px]">Instagram Username </label>
                        <input type="text" placeholder="your Instagram" className="header-input placeholder;text-gray-400 placeholder:text-sm bg-lightGlass min-h-[30px] w-full max-w-[400px] px-2 py-2 rounded-md focus:border-0 active:border-0 focus-visible:border-0 focus-visible:outline-none" id="TwitterUsername" name="TwitterUsername" />
                    </div>
                </div>
                <div>

                </div>
            </div>
        </form>
    )
}

export default page