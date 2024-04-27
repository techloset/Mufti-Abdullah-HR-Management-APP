// Export types for both routers
export type OurFileRouter = typeof ourFileRouter;
export type ImageUploaderRouterType = typeof ImageUploaderRouter;

// Merge both routers into one
const combinedRouter = { ...ourFileRouter, ...ImageUploaderRouter };

// Use the combined router in createRouteHandler
import { createRouteHandler } from "uploadthing/next";
import { ImageUploaderRouter, ourFileRouter } from "./core";

export const { GET, POST } = createRouteHandler({
  router: combinedRouter,
});
