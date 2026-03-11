import { RouteClient, CANVAS_DRAFT_STATE } from "@uniformdev/canvas";

export async function getComposition(path?: string) {
  const projectId = process.env.UNIFORM_PROJECT_ID;
  const apiKey = process.env.UNIFORM_API_KEY;

  if (!projectId || !apiKey) {
    throw new Error("UNIFORM_PROJECT_ID and UNIFORM_API_KEY must be set in .env");
  }

  const client = new RouteClient({
    projectId,
    apiKey,
  });

  const response = await client.getRoute({
    path: path ?? "/",
    state: CANVAS_DRAFT_STATE,
  });

  if (response.type === "composition") {
    return response.compositionApiResponse.composition;
  }

  return null;
}
