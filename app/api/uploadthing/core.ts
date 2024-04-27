import { createUploadthing } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" });

// Define the first router
export const ourFileRouter = {
  pdfUploader: f({ pdf: { maxFileSize: "1024KB" } })
    .middleware(async ({ req }) => {
      try {
        const user = await auth(req);
        if (!user) throw new UploadThingError("Unauthorized");
        return { userId: user.id };
      } catch (error) {
        throw new UploadThingError("Authentication error");
      }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      try {
        console.log("Upload complete for userId:", metadata.userId);
        console.log("file url", file.url);
        return { uploadedBy: metadata.userId };
      } catch (error) {
        throw new UploadThingError("Error processing upload complete");
      }
    }),
};

export const ImageUploaderRouter = {
  imageUploader: f({ image: { maxFileSize: "1024KB" } }) // Assuming you want to upload images here
    .middleware(async ({ req }) => {
      try {
        const user = await auth(req);
        if (!user) throw new UploadThingError("Unauthorized");
        return { userId: user.id };
      } catch (error) {
        throw new UploadThingError("Authentication error");
      }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      try {
        console.log("Upload complete for userId:", metadata.userId);
        console.log("file url", file.url);
        return { uploadedBy: metadata.userId };
      } catch (error) {
        throw new UploadThingError("Error processing upload complete");
      }
    }),
};
export type OurFileRouter = typeof ourFileRouter;
export type ImageUploaderRouterType = typeof ImageUploaderRouter;
