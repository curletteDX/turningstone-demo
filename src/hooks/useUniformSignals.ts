import { useCallback, useEffect } from "react";
import { useUniformContext } from "@uniformdev/context-react";

export function useUniformSignals() {
  const { context } = useUniformContext();

  const scores = context.scores;

  const setInterest = useCallback(
    (category: string) => {
      context.update({
        quirks: {
          interest: category,
        },
      });
    },
    [context]
  );

  const getSignalScore = useCallback(
    (signalName: string): number => {
      return scores[signalName] ?? 0;
    },
    [scores]
  );

  const getUtmCampaign = useCallback((): string | null => {
    if (typeof window === "undefined") return null;
    const params = new URLSearchParams(window.location.search);
    return params.get("utm-campaign") || params.get("utm_campaign");
  }, []);

  useEffect(() => {
    const utmCampaign = getUtmCampaign();
    if (utmCampaign) {
      setInterest(utmCampaign);
    }
  }, [getUtmCampaign, setInterest]);

  return {
    scores,
    setInterest,
    getSignalScore,
    getUtmCampaign,
  };
}
