import { BASE_URL } from "@/constants/url";

export const IVAO_INTEGRATION_REDIRECT_URI = `${BASE_URL}/auth/callback/ivao`;
export const NAVIGRAPH_INTEGRATION_REDIRECT_URI = `${BASE_URL}/auth/callback/navigraph`;

export const INTEGRATION_PROVIDERS = {
  ivao: {
    styledName: "IVAO",
    logoUrl: "https://static.skyscope.app/networks/ivao.png",
  },
  navigraph: {
    styledName: "Navigraph",
    logoUrl: "https://static.skyscope.app/integrations/navigraph.png",
  },
  vatsim: {
    styledName: "Vatsim",
    logoUrl: "https://static.skyscope.app/networks/vatsim.png",
  },
};
