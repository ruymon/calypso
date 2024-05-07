import { storeIntegrationCredentials } from "@/lib/integrations/comum";
import { exchangeTemporaryCodeForNavigraphToken } from "@/lib/integrations/navigraph";
import { IntegrationFinishRedirect } from "../_components/integration-finish-redirect";

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
  await storeIntegrationCredentials(navigraphCredentials, "navigraph");

  return <IntegrationFinishRedirect provider="navigraph" />;
}
