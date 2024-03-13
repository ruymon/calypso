import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { defineCollection, defineConfig, s } from "velite";

const slugify = (input: string) =>
  input
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const count = s
  .object({ total: s.number(), posts: s.number() })
  .default({ total: 0, posts: 0 });

const meta = s
  .object({
    title: s.string().optional(),
    description: s.string().optional(),
    keywords: s.array(s.string()).optional(),
  })
  .default({});

const tags = defineCollection({
  name: "Tag",
  pattern: "tags/index.yml",
  schema: s
    .object({
      name: s.string().max(20),
      slug: s.slug("global", ["admin", "login"]),
      cover: s.image().optional(),
      description: s.string().max(999).optional(),
      count,
    })
    .transform((data) => ({ ...data, permalink: `/blog/tags/${data.slug}` })),
});

const authors = defineCollection({
  name: "Author",
  pattern: "authors/index.yml",
  schema: s
    .object({
      name: s.string().max(99),
      slug: s.slug("global", ["admin", "login"]),
      avatar: s.image().optional(),
      description: s.string().max(999).optional(),
      count,
    })
    .transform((data) => ({
      ...data,
      permalink: `/blog/authors/${data.slug}`,
    })),
});

const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug("post"),
      date: s.isodate(),
      updated: s.isodate().optional(),
      cover: s.image(),
      video: s.file().optional(),
      description: s.string().max(999).optional(),
      draft: s.boolean().default(false),
      featured: s.boolean().default(false),
      tags: s.array(s.string()).default([]),
      authors: s.array(s.string()).default([]),
      meta: meta,
      toc: s.toc(),
      metadata: s.metadata(),
      excerpt: s.excerpt(),
      content: s.mdx(),
    })
    .transform((data) => ({ ...data, permalink: `/blog/posts/${data.slug}` })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: {
    tags,
    posts,
    authors,
  },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "vesper",
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
  prepare: ({ tags, posts, authors }) => {
    const docs = posts.filter(
      (i) => process.env.NODE_ENV !== "production" || !i.draft,
    );

    const tagsFromDoc = Array.from(
      new Set(docs.map((item) => item.tags).flat()),
    ).filter((i) => tags.find((j) => j.name === i) == null);
    tags.push(
      ...tagsFromDoc.map((name) => ({
        name,
        slug: slugify(name),
        permalink: "",
        count: { total: 0, posts: 0 },
      })),
    );
    tags.forEach((i) => {
      i.count.posts = posts.filter((j) => j.tags.includes(i.name)).length;
      i.count.total = i.count.posts;
      i.permalink = `/${i.slug}`;
    });

    const authorsFromDoc = Array.from(
      new Set(docs.map((item) => item.authors).flat()),
    ).filter((i) => authors.find((j) => j.name === i) == null);
    authors.push(
      ...authorsFromDoc.map((name) => ({
        name,
        slug: slugify(name),
        permalink: "",
        count: { total: 0, posts: 0 },
      })),
    );
    authors.forEach((i) => {
      i.count.posts = posts.filter((j) => j.authors.includes(i.name)).length;
      i.count.total = i.count.posts;
      i.permalink = `/${i.slug}`;
    });

    // return false // return false to prevent velite from writing data to disk
  },
});
