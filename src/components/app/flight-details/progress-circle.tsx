import { cn } from "@/lib/utils";

interface FlightDetailsProgressCircleProps {
  percentage: number;
};

const dash = 618;
const strokeWidth = 28;

export function FlightDetailsProgressCircle({ percentage }: FlightDetailsProgressCircleProps) {
  const strokeDashoffsetComputed = dash - (dash * percentage) / 100;

  return (
    <div className="relative">
      <style>{`
        @keyframes progress {
          0% {
            stroke-dashoffset: ${dash};
          }
          100% {
            stroke-dashoffset: ${strokeDashoffsetComputed};
          }
        }
        .animate-progress {
          animation: progress 2s ease-out forwards;
        }
      `}</style>


      <svg viewBox="0 0 232 232" className='w-14 aspect-square -rotate-90'>
        <circle
          cx="50%" cy="50%"
          r="98.5"
          strokeDasharray={dash}
          strokeDashoffset={0}
          strokeWidth={strokeWidth}
          fill="none"
          className="stroke-muted"
          opacity="1"
        />

        <circle
          strokeDasharray={dash}
          strokeDashoffset={strokeDashoffsetComputed}
          strokeWidth={strokeWidth}
          fill="none"
          cx="50%" cy="50%"
          r="98.5"
          className={cn('animate-progress stroke-muted-foreground',
          percentage >= 25 && 'stroke-pink-500', 
          percentage >= 50 && 'stroke-yellow-400',
          percentage >= 75 && 'stroke-orange-400',
          percentage >= 90 && 'stroke-green-500'
          )}
        />
      </svg>



      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="text-xs font-semibold text-accent-foreground">{percentage}%</span>
      </div>

    </div>
  );
};
