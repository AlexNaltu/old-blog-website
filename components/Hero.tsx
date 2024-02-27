import Image from "next/image";
import Link from "next/link";
import { BsDiscord, BsInstagram } from "react-icons/bs";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="flex justify-center hero-bg py-5 lg:py-10">
      <div className="p-2 flex flex-col gap-2">
        <div className="flex flex-col">
          <h1 className="bg-black w-fit text-white text-[10px] sm:text-sm py-[2px] px-3 font-black">
            WELCOME
          </h1>
          <h2 className="flex flex-col uppercase font-black text-white text-[15px] sm:text-lg md:text-2xl lg:text-4xl tracking-tighter">
            ANIMEALXN is a blog for anime news
            <span className="text-[#FF6100]">reviews and anime enjoyers</span>
          </h2>
        </div>
        <Link href="#posts">
          <Button
            className=" text-[10px] uppercase tracking-tighter bg-[#FF6100] rounded-l-none rounded-r-full font-black scroll-smooth	"
            size="sm"
          >
            Read Blogs
          </Button>
        </Link>
        <p className="text-base tracking-tighter mt-2 uppercase font-black text-white navbar w-fit md:text-xl">
          Join the community!
        </p>
        <div className="flex w-fit border-2 ">
          <Link
            href="https://discord.gg/f6ku3N8w"
            className="flex items-center gap-2 text-sm font-black tracking-tighter px-8 py-6 sm:px-10 sm:py-8 md:px-16 lg:px-24 b1-image w-fit text-white cursor-pointer"
          >
            <BsDiscord size={20} />
            SERVER
          </Link>
          <Link
            href="https://www.instagram.com/imnotalxn/"
            className="flex items-center gap-2 text-sm font-black tracking-tighter px-8 py-6 sm:px-10 sm:py-8 md:px-16 lg:px-24 b2-image w-fit text-white"
          >
            <BsInstagram size={20} />
            FOLLOW
          </Link>
        </div>
      </div>
    </div>
  );
}
