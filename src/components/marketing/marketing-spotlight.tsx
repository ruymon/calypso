import { cn } from "@/lib/utils";

interface MarketingSpotlightProps {
  className?: string;
}

export function MarketingSpotlight({ className }: MarketingSpotlightProps) {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute left-0 top-0 z-[1] h-full w-full text-accent-foreground opacity-0 lg:-left-16 lg:top-24",
        className,
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter0_f_1065_8)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill="currentColor"
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1065_8"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          />
        </filter>
      </defs>
    </svg>
  );
}
