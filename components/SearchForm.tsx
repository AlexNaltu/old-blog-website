"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { formUrlQuery } from "@/sanity/utils";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { Label } from "./ui/label";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";
      if (search) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: search,
        });
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
      }

      router.push(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <form className="flex mx-auto w-full border-2 border-[#ff6100] max-w-[270px]">
      <Label className="flex items-center relative">
        <IoSearch size={20} className="mx-2 text-[#ff6100]" />
        <Input
          className="base-regular h-fit border-0 bg-black-400 p-2 pl-4 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800"
          placeholder="Search Post"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Label>
    </form>
  );
};

export default SearchForm;
