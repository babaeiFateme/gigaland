import Brand from "@/components/page/landing/Brand";
import Hero from "@/components/page/landing/Hero";

import LastBlogs from "@/components/page/landing/LastBlogs";
import PopularCategories from "@/components/page/landing/PopularCategories";
import ShareApp from "@/components/page/landing/ShareApp";

import TopSeller from "@/components/page/landing/TopSeller";
import TradingNtfs from "@/components/page/landing/TradingNtfs";



export default function Home() {
  return (
    <main className=" min-h-screen mx-auto sm:p-10 md:p-16 lg:p-24 lg:pt-36">
      <Hero />
      <Brand />
      <TopSeller />
      <TradingNtfs />
      <PopularCategories />
      <LastBlogs />
      <ShareApp />
    </main>
  );
}
