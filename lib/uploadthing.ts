import { generateUploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

// Kita export tombol yang sudah disetting khusus untuk API kita
export const UploadButton = generateUploadButton<OurFileRouter>();