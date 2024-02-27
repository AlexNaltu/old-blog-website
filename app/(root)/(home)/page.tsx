import AnimeCard from "@/components/AnimeCard";
import FeaturedCard from "@/components/FeaturedCard";
import Filters from "@/components/Filters";
import Header from "@/components/Header";
import IdeeaSection from "@/components/IdeeaSection";
import PlaylistCard from "@/components/PlaylistCard";
import PostCard from "@/components/PostCard";
import { getFeaturedAnime, getPostPlaylist, getPosts } from "@/sanity/actions";
import React from "react";

export const revalidate = 60;

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Home = async ({ searchParams }: Props) => {
  const posts = await getPosts({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: "1",
  });

  const postsPlaylist = await getPostPlaylist();
  const featuredAnime = await getFeaturedAnime();

  return (
    <div className="max-w-screen-2xl">
      <div className="lg:flex justify-center gap-3 min-[1300px]:gap-7">
        <main>
          <section>
            <Filters />
          </section>
          <div>
            {(searchParams?.query || searchParams?.category) && (
              <section>
                <div>
                  <Header
                    query={searchParams?.query || ""}
                    category={searchParams?.category || ""}
                  />
                  <div className="flex w-full flex-wrap gap-2 sm:justify-start pl-1 mt-2">
                    {posts?.length > 0 ? (
                      posts.map((post: any) => (
                        <PostCard
                          key={post._id}
                          title={post.title}
                          id={post._id}
                          image={post.image}
                          name={post.name}
                          slug={post.slug}
                        />
                      ))
                    ) : (
                      <p className="font-black uppercase">No posts found</p>
                    )}
                  </div>
                </div>
              </section>
            )}
            {postsPlaylist.map((item: any) => (
              <section
                key={item._id}
                className="mt-2 w-full pl-7 min-[516px]:pl-1"
              >
                <h1 className="uppercase font-black text-2xl tracking-tighter navbar w-fit">
                  {item.title}
                </h1>
                <div className="mt-2 flex w-full flex-wrap flex-start sm:flex-col gap-3">
                  {item.posts.map((posts: any) => (
                    <div key={posts._id}>
                      <PlaylistCard
                        title={posts.title}
                        id={posts._id}
                        image={posts.image}
                        name={posts.name}
                        description={posts.description}
                        slug={posts.slug}
                      />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>
        <div>
          <div className="featured mt-12">
            {featuredAnime.map((items: any) => (
              <div key={items._id}>
                <section className="p-3 min-[516px]:pl-1">
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
  );
};

export default Home;
