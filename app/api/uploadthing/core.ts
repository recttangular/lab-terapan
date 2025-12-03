import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// FileRouter untuk aplikasi kita
export const ourFileRouter = {
  // Kita buat rute bernama "imageUploader"
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .onUploadComplete(async ({ metadata, file }) => {
      // Ini jalan kalau upload selesai
      console.log("Upload selesai, url gambar:", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;