import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getNameInitials } from "@/lib/utils";
import "@/styles/mdx.css";
import { authors, posts, tags } from "@site/content";
import { format } from "date-fns";
import { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import { notFound } from "next/navigation";
import { MDXContent } from "../../_components/mdx";

interface BlogPostPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (post == null) return {};
  return { title: post.title, description: post.description };
}

export function generateStaticParams(): BlogPostPageProps["params"][] {
  return posts.map((post) => ({
    slug: post.slug,
    locale: "en", // FIXME: Hardcoded locale
  }));
}

export default function BlogPostPage({
  params: { slug, locale },
}: BlogPostPageProps) {
  setStaticParamsLocale(locale);
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="container flex w-full max-w-2xl flex-col gap-16 py-8">
      <header className="flex flex-col gap-1">
        <div className="mb-2 flex flex-wrap gap-2">
          {post.tags.map((tagSlug, index) => {
            const tag = tags.find((tag) => tag.slug === tagSlug);

            if (!tag) return null;

            return (
              <Badge key={index} className="w-fit" variant="secondary">
                {tag.name}
              </Badge>
            );
          })}
        </div>

        <h1 className="md:leading-14 text-4xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-5xl">
          {post.title}
        </h1>
        <span className="text-lg text-muted-foreground">
          {post.description}
        </span>

        <div className="mt-12 flex gap-16">
          <div className="flex flex-col gap-2 text-sm">
            <span className="text-muted-foreground">Written by</span>

            <div className="flex items-center gap-4">
              {post.authors.map((authorSlug, index) => {
                const author = authors.find(
                  (author) => author.slug === authorSlug,
                );

                if (!author) return null;

                return (
                  <div key={index} className="flex items-center gap-1.5">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={author.avatar?.src} />
                      <AvatarFallback className="text-2xs">
                        {getNameInitials(author.name)}
                      </AvatarFallback>
                    </Avatar>

                    <span className="text-sm font-medium text-accent-foreground">
                      {author.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <span className="text-muted-foreground">Published on</span>

            <time
              dateTime={post.date}
              className="font-medium text-accent-foreground"
            >
              {format(new Date(post.date), "MMMM dd, yyyy")}
            </time>
          </div>
        </div>
      </header>

      <Separator />

      <section className="prose prose-zinc w-full dark:prose-invert">
        <MDXContent code={post.content} />
      </section>
    </article>
  );
}
