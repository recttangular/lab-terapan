import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// FileRouter untuk aplikasi kita
export const ourFileRouter = {
  // Kita buat rute bernama "imageUploader"
  imageUploader: f({ 
    image: { 
      maxFileSize: "32MB", 
      maxFileCount: 10 // <-- GANTI JADI 10 (Atau berapapun maumu)
    } 
  })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload selesai:", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;