import {
  exchangeTemporaryCodeForNavigraphToken,
  storeIntegrationCredentials,
} from "@/lib/integrations/navigraph";
import { redirect } from "next/navigation";

interface NavigraphIntegrationCallbackPageProps {
  searchParams: {
    state: string;
    code: string;
  };
}

export default async function NavigraphIntegrationCallbackPage({
  searchParams: { state, code },
}: NavigraphIntegrationCallbackPageProps) {
  const navigraphCredentials = await exchangeTemporaryCodeForNavigraphToken(
    code,
    state,
  );
  await storeIntegrationCredentials(navigraphCredentials);
  redirect("/settings/integrations");

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
}
