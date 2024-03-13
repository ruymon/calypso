import { sortBlogPostsByDate } from "@/lib/utils";
import { posts } from "@site/content";
import { setStaticParamsLocale } from "next-international/server";
import { PostCard } from "./_components/post-card";

interface BlogRootPageProps {
  params: {
    locale: string;
  };
}

export default async function BlogRootPage({
  params: { locale },
}: BlogRootPageProps) {
  setStaticParamsLocale(locale);
  const displayedPosts = sortBlogPostsByDate(posts);

  return (
    <main className="flex max-w-xl flex-col gap-8">
      <header className="flex w-full flex-col gap-2 py-12">
        <h1 className="text-5xl font-bold text-foreground">Blog</h1>
        <span className="text-lg text-muted-foreground">
          We write stuff from time to time that might be interesting 🤷‍
        </span>
      </header>

      <section className="flex flex-col gap-4">
        {displayedPosts.length > 0 ? (
          displayedPosts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))
        ) : (
          <p>No posts available</p>
        )}
      </section>
    </main>
  );
}
