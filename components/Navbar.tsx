import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { SiDiscord } from "react-icons/si";
import SearchForm from "./SearchForm";
import { Suspense } from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center navbar">
        <Link href={"/"}>
          <h1 className="flex flex-col text-sm sm:text-lg  font-black custom-bg text-white px-6 sm:px-14 py-3 sm:py-5 tracking-widest">
            ANIMEALXN{" "}
            <span className="text-[10px] sm:text-sm text-[#FF6100]">
              私のアニメブログ
            </span>
          </h1>
        </Link>

        <div className="flex items-center gap-5 p-2 sm:p-5">
          <Suspense>
            <SearchForm />
          </Suspense>
        </div>
      </nav>
    </div>
  );
}
