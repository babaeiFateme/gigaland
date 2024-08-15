import Brand from "@/components/page/landing/Brand";
import LastBlogs from "@/components/page/landing/LastBlogs";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen mx-auto p-10 sm:p-16 lg:p-24">
      <Brand />
      <LastBlogs />

    </main>
  );
}
