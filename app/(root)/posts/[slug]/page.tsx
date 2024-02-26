import { getFeaturedAnime, getPost } from "@/sanity/actions";
import { dataset, projectId } from "@/sanity/env";
import { urlForImage } from "@/sanity/lib/image";
import { formatDate } from "date-fns";
import Image from "next/image";
import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FeaturedCard from "@/components/FeaturedCard";
import IdeeaSection from "@/components/IdeeaSection";

export const revalidate = 600;

interface BlockProps {
  children: React.ReactNode;
}

const BlockContent = require("@sanity/block-content-to-react");

const serializers = {
  types: {
    block: (props: BlockProps) => (
      <>
        <h1 className="font-black uppercase text-xs sm:text-base md:text-lg tracking-tighter">
          {props.children}
        </h1>
        <p className={` tracking-tighter my-4 text-xs sm:text-base md:text-lg`}>
          {props.children}
        </p>
      </>
    ),
  },
};

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost({ slug: params.slug });

  const featuredAnime = await getFeaturedAnime();

  return (
    <div className="max-w-[1000px] mx-auto p-1">
      <div className="flex flex-col lg:flex-row lg:justify-around lg:gap-4">
        <div key={post._id} className="flex flex-col max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mt-2">
            <h1 className="capitalize bg-[#ff6100] w-fit text-white px-2 py-1 rounded-r-3xl text-xs sm:text-base md:text-lg">
              {post.category}
            </h1>
            <div className="flex items-center gap-1 tracking-tighter font-black uppercase text-xs sm:text-base md:text-lg navbar">
              <h2>
                Published by{" "}
                <span className="text-[#ff6100]">{post.author.name}</span>
              </h2>
              <p>At: {formatDate(new Date(post.publishedAt), "dd.MM.yyyy")}</p>
            </div>
          </div>
          <p className="font-black uppercase tracking-tighter text-lg sm:text-xl md:text-2xl">
            {post.title}
          </p>
          <Image
            src={urlForImage(post.mainImage)}
            alt="/"
            width={700}
            height={500}
            className="aspect-[16/7] object-cover"
          />
          <BlockContent
            blocks={post.body}
            imageOptions={{ w: 2000 }}
            projectId={`${projectId}`}
            dataset={`${dataset}`}
            serializers={serializers}
          />
        </div>
        <div>
          <div>
            <div className="featured mt-12">
              {featuredAnime.map((items: any) => (
                <div key={items._id}>
                  <section className="p-1 lg:pl-3">
                    <h1 className="uppercase font-black text-2xl tracking-tighter navbar w-fit my-2 text-white">
                      {items.title}
                    </h1>
                    <div className="mt-2 flex w-full flex-wrap flex-start gap-2 lg:flex-col">
                      {items.posts.map((item: any) => (
                        <div key={item._id}>
                          <FeaturedCard
                            title={item.title}
                            name={item.name}
                            image={item.image}
                            slug={item.slug}
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              ))}
            </div>
            <IdeeaSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
