import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

// Export jalur API untuk Next.js App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});