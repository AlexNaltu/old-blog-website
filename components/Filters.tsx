"use client";

import { formUrlQuery } from "@/sanity/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";

const links = ["all", "anime", "manga", "merchandise", "games"];

const Filters = () => {
  const [active, setActive] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilter = (link: string) => {
    let newUrl = "";

    if (active === link) {
      setActive("");

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["category"],
        value: null,
      });
    } else {
      setActive(link);

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: link.toLowerCase(),
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <ul
      className="flex w-full max-w-full gap-2 overflow-auto sm:max-w-2xl custom-ul mt-1"
      id="posts"
    >
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={`${
            active === link ? "text-[#ff6100]" : ""
          } whitespace-nowrap px-8 py-2.5 capitalize font-black`}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;
