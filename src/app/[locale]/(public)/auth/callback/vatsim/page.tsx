import { storeIntegrationCredentials } from "@/lib/integrations/comum";
import { exchangeTemporaryCodeForVatsimToken } from "@/lib/integrations/vatsim";
import { IntegrationFinishRedirect } from "../_components/integration-finish-redirect";

interface VatsimIntegrationCallbackPageProps {
  searchParams: {
    state: string;
    code: string;
  };
}

export default async function VatsimIntegrationCallbackPage({
  searchParams: { state, code },
}: VatsimIntegrationCallbackPageProps) {
  const vatsimCredentials = await exchangeTemporaryCodeForVatsimToken(code);
  await storeIntegrationCredentials(vatsimCredentials, "vatsim");

  return <IntegrationFinishRedirect provider="vatsim" />;
}
