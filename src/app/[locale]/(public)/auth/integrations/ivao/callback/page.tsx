import {
  exchangeTemporaryCodeForIvaoToken,
  storeIntegrationCredentials,
} from "@/lib/integrations/ivao";
import { redirect } from "next/navigation";

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
  redirect("/settings/integrations");

  return <h1>Integrating...</h1>;
}
