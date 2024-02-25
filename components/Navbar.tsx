import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { SiDiscord } from "react-icons/si";
import SearchForm from "./SearchForm";

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
          <SearchForm />
          <div className="hidden sm:inline-flex items-center gap-2">
            <Link
              href="/log-in"
              className="rounded-full text-[#FF6100] hover:text-orange-700 transition-all duration-300"
            >
              <RiInstagramFill size={25} />
            </Link>
            <Link
              href="/log-in"
              className="rounded-full text-[#FF6100] hover:text-orange-700 transition-all duration-300"
            >
              <SiDiscord size={25} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
