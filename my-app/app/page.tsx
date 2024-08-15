import Brand from "@/components/page/landing/Brand";
import Hero from "@/components/page/landing/Hero";

import LastBlogs from "@/components/page/landing/LastBlogs";
import PopularCategories from "@/components/page/landing/PopularCategories";


export default function Home() {
  return (
    <main className=" min-h-screen mx-auto p-10 sm:p-16 lg:p-24">
      <Hero />
      <Brand />
      <PopularCategories />
      <LastBlogs />
    </main>
  );
}
