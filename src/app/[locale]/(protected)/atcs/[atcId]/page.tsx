import { getATCDetails } from "@/lib/atcs";
import { notFound } from "next/navigation";

interface ATCDetailsPageProps {
  params: {
    atcId: string;
  };
}

export default async function ATCDetailsPage({
  params: { atcId },
}: ATCDetailsPageProps) {
  if (!atcId) {
    return notFound();
  }

  const data = await getATCDetails(atcId);

  return <h1>Under construction</h1>;
}
