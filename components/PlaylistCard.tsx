import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  id: string;
  image: string;
  name: string;
  description: string;
  slug: string;
}

const PlaylistCard = ({ title, id, image, name, description, slug }: Props) => {
  return (
    <div>
      <Link href={`/posts/${slug}`}>
        <div className=" flex flex-col max-w-[250px] sm:flex-row sm:max-w-3xl gap-2">
          <Image
            src={image}
            alt="/"
            width={300}
            height={440}
            className="aspect-video object-cover max-w-[250px]"
          />
          <div className="flex flex-col gap-1 mt-1">
            <h2 className="uppercase font-black tracking-tighter text-[#ff6100] text-xs">
              {name}
            </h2>
            <h1 className="uppercase font-black text-xs lg:text-base tracking-tighter line-clamp-2">
              {title}
            </h1>
            <p className="line-clamp-4 text-xs font-medium">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlaylistCard;
