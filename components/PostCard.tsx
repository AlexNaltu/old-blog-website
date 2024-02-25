import React from "react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  image: string;
  name: string;
  slug: string;
}

const PostCard = ({ id, title, image, name, slug }: Props) => {
  return (
    <Card className="max-w-full px-6 sm:max-w-[200px] sm:px-0">
      <Link href={`/posts/${slug}`}>
        <CardHeader className="flex-center flex-col gap-2.4 !p-0">
          <div>
            <Image
              src={image}
              alt="/"
              width={384}
              height={440}
              className="h-fit w-full aspect-video sm:aspect-square object-cover"
            />
          </div>
          <CardTitle className="uppercase font-black text-sm tracking-tighter text-[#ff6100] min-[400px]:text-lg sm:text-sm">
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <h1 className="uppercase font-black text-base tracking-tighter min-[400px]:text-lg min-[500px]:text-xl sm:text-sm line-clamp-3">
            {title}
          </h1>
        </CardContent>
      </Link>
    </Card>
  );
};

export default PostCard;
