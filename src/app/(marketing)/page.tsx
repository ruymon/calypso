import { MarketingFeatureCard } from "@/components/marketing/marketing-feature-card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MarketingHomePage() {
  return (
    <>
      <div className="bg-secondary rounded-full p-2 w-full flex items-center justify-between text-sm">
        <div className="flex items-center gap-3">
          <Badge variant="purple" radius="full">New</Badge>
          <h5 className="text-secondary-foreground  ">Ground control is now Skyscope!</h5>
        </div>

        <Link href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors px-2.5 gap-0.5 flex items-center group">
          <span>Read full article</span>
          <ChevronRightIcon className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>

      <section id="hero" className="flex flex-col gap-12 items-center my-12">
        <header className="flex flex-col gap-3 items-center md:w-3/4 text-center">
          <h1 className="text-6xl md:text-7xl font-semibold text-foreground">Your all in one tool for flight simulation</h1>
          <span className="text-lg text-muted-foreground md:w-3/4">Be part of the new era, monitor all flights in networks in a fast and intuitive way.</span>
        </header>

        <div className="flex items-center flex-col gap-2">
          <Button size="lg" variant="primary" className="w-full">Open {siteConfig.name}</Button>
          <Link href="#" className={buttonVariants({ variant: "ghost", className: "w-full font-medium" })}>Check what&apos;s new</Link>
        </div>

        <figure className="w-full aspect-video relative overflow-clip rounded-t-2xl">
          <Image src="https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0" layout='fill' objectFit='cover' alt="App screenshot" />
          <div className="bg-gradient-to-t from-background to-background/50 z-10 absolute inset-0" />
        </figure>
      </section>

      <section id="features" className="flex flex-col gap-12 items-center my-12">
        <header className="flex flex-col gap-3 items-center md:w-3/4 text-center">
          <h2 className="text-5xl font-semibold text-secondary-foreground">Addressing your concerns with effortless solutions!</h2>
          <span className="text-lg text-muted-foreground md:w-3/4">Responsive Upgrades: Your feedback incorporated in the reimagined Kronos.</span>
        </header>

        <Link href="#" className={buttonVariants({ variant: "ghost", className: "font-medium" })}>Read full article</Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MarketingFeatureCard titleGhost="Less setup to" titleStrong="Get s#!% done!" description="We are not here to be a pain in the back. We strive to get things done and have a bias towards action." />
          <MarketingFeatureCard titleGhost="Transparency is" titleStrong="key!" description="We communicate early and often. We don&apos;t have secrets but respect privacy and are honest if things went bad." />
          <MarketingFeatureCard className="md:col-span-2 lg:col-auto" titleGhost="Keep it" titleStrong="simple." description="We keep things simple and prefer pragmatic solutions over complicated abstractions. We cut away cargo cult." />
        </div>
      </section>
    </>
  );
};
