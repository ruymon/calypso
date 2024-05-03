import {
  exchangeTemporaryCodeForIvaoToken,
  storeIntegrationCredentials,
} from "@/lib/integrations/ivao";
import { IntegrationFinishRedirect } from "../_components/integration-finish-redirect";
interface IvaoIntegrationCallbackPageProps {
  searchParams: {
    state: string;
    code: string;
  };
}

export default async function IvaoIntegrationCallbackPage({
  searchParams: { state, code },
}: IvaoIntegrationCallbackPageProps) {
  const ivaoCredentials = await exchangeTemporaryCodeForIvaoToken(code);
  await storeIntegrationCredentials(ivaoCredentials);

  return <IntegrationFinishRedirect provider="ivao" />;
}
