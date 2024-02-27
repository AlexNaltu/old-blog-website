import React from "react";
import { FaSquareInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import NewsletterForm from "./NewsletterForm";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-bg mt-10 footer sm:py-10 lg:py-16">
      <div className="flex flex-col items-start sm:flex-row  justify-around sm:items-end">
        <NewsletterForm />
        <div className="flex gap-3 lg:gap-8 items-center px-5 mb-6 text-white">
          <Link href="https://www.facebook.com/profile.php?id=61554246167577">
            <ImFacebook2
              size={40}
              className="hover:text-[#ff6100] cursor-pointer transition-all duration-200 ease-in-out"
            />
          </Link>

          <Link href="https://discord.gg/cBRc6uZKeC">
            <BsInstagram
              size={40}
              className="hover:text-[#ff6100] cursor-pointer transition-all duration-200 ease-in-out"
            />
          </Link>

          <Link href="https://www.tiktok.com/@imhim_alxn">
            <FaTiktok
              size={40}
              className="hover:text-[#ff6100] cursor-pointer transition-all duration-200 ease-in-out"
            />
          </Link>

          <Link href="">
            <FaXTwitter
              size={40}
              className="hover:text-[#ff6100] cursor-pointer transition-all duration-200 ease-in-out"
            />
          </Link>
        </div>
      </div>
      <div>
        <h1 className="max-w-sm text-white uppercase tracking-tighter text-xs font-black mx-auto mt-4 sm:mt-10 xl:mt-20 p-1 text-center">
          Copyright © 2024 AnimeAlxn. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
