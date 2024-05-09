export type OurFileRouter = typeof ourFileRouter;
export type ImageUploaderRouterType = typeof ImageUploaderRouter;

const combinedRouter = { ...ourFileRouter, ...ImageUploaderRouter };

import { createRouteHandler } from "uploadthing/next";
import { ImageUploaderRouter, ourFileRouter } from "./core";

export const { GET, POST } = createRouteHandler({
  router: combinedRouter,
});
