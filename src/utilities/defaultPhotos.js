import cloudinary from "cloudinary/lib/cloudinary";
import { listResources } from "cloudinary/lib/api/resources";

// Initialize Cloudinary
cloudinary.v2.config({
  cloud_name: "dgs9byfnn",
  api_key: "452489173444953",
  api_secret: "7VAytfeOHalFf0LFmaiwdMewiOw",
});

// Define the folder name to list resources from
const folderName = "portfolio";

// List all resources in the folder
listResources({ type: "upload", prefix: folderName }, function (error, result) {
  if (error) {
    console.error(error);
    return;
  }

  console.log(result.resources);
});
