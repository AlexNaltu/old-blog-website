import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  name: string;
  slug: string;
}

const FeaturedCard = ({ title, slug, name, image }: Props) => {
  return (
    <Card className="max-w-[300px] sm:px-0">
      <Link href={`/posts/${slug}`}>
        <CardHeader className="flex-center flex-col gap-2.4 !p-0">
          <div>
            <Image
              src={image}
              alt="/"
              width={384}
              height={440}
              className="h-fit w-full aspect-video object-cover"
            />
          </div>
          <CardTitle className="uppercase font-black text-sm tracking-tighter text-[#ff6100] min-[400px]:text-lg sm:text-sm">
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <h1 className="uppercase font-black text-base tracking-tighter min-[400px]:text-lg min-[500px]:text-xl sm:text-sm line-clamp-3 text-white">
            {title}
          </h1>
        </CardContent>
      </Link>
    </Card>
  );
};

export default FeaturedCard;
