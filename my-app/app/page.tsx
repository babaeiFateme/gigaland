import Brand from "@/components/page/landing/Brand";
import Hero from "@/components/page/landing/Hero";

import LastBlogs from "@/components/page/landing/LastBlogs";
import PopularCategories from "@/components/page/landing/PopularCategories";
import ShareApp from "@/components/page/landing/shareApp";
import TradingNtfs from "@/components/page/landing/TradingNtfs";



export default function Home() {
  return (
    <main className=" min-h-screen mx-auto p-10 sm:p-16 lg:p-24">
      <Hero />
      <Brand />
      <PopularCategories />
      <TradingNtfs/>
      <LastBlogs />
      <ShareApp />
    </main>
  );
}
