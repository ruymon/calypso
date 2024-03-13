import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getNameInitials } from "@/lib/utils";
import { Post, authors, tags } from "@site/content";
import { format } from "date-fns";
import { Stars } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps extends Post {}

export function PostCard(post: PostCardProps) {
  return (
    <Link href={`/blog/posts/${post.slug}`}>
      <Card className="relative overflow-clip">
        {post.featured && (
          <Badge className="absolute right-4 top-4 z-10">
            <Stars className="mr-1 h-3 w-3" />
            Featured
          </Badge>
        )}
        <Image
          alt="Post cover image"
          width={post.cover.width}
          height={post.cover.height}
          className="max-h-72 w-full"
          src={post.cover.src}
          blurDataURL={post.cover.blurDataURL}
        />

        <CardHeader className="gap-2 p-6">
          <CardTitle className="text-2xl">{post.title}</CardTitle>
          <CardDescription className="line-clamp-2 text-base">
            {post.excerpt}
          </CardDescription>

          <div className="mt-4 flex flex-wrap gap-2">
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
        </CardHeader>

        <CardFooter className="items-start gap-12 p-6">
          <div className="flex flex-col gap-4">
            <span>Written by</span>

            <div className="flex flex-col gap-2">
              {post.authors.map((authorSlug, index) => {
                const author = authors.find(
                  (author) => author.slug === authorSlug,
                );

                if (!author) return null;

                return (
                  <div key={index} className="flex items-center gap-1.5">
                    <Avatar className="h-5 w-5">
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

          <div className="flex flex-col gap-4">
            <span>Published at</span>

            <time
              dateTime={post.date}
              className="text-sm font-medium text-accent-foreground"
            >
              {format(new Date(post.date), "MMMM dd, yyyy")}
            </time>
          </div>

          <div className="flex flex-col gap-4">
            <span>Read time</span>

            <span className="text-sm font-medium text-accent-foreground">
              {post.metadata.readingTime}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
