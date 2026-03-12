import { useEffect } from "react";
import { useUniformContext } from "@uniformdev/context-react";

export default function UtmTracker() {
  const { context } = useUniformContext();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const utmCampaign = params.get("utm-campaign") || params.get("utm_campaign");

    if (utmCampaign) {
      context.update({
        quirks: {
          interest: utmCampaign,
        },
      });
    }
  }, [context]);

  return null;
}
