import { getCurrentAiracCycle } from "@/lib/navdata";
import { AiracCycleToast } from "./airac-cycle-toast";

interface AiracCycleBadgeProps {}

export async function AiracCycleBadge({}: AiracCycleBadgeProps) {
  const airacCycle = await getCurrentAiracCycle();
  return <AiracCycleToast data={airacCycle} />;
}
