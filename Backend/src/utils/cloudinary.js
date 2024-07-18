import { v2 as cloudinary } from "cloudinary";
import { error } from "console";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadFileInCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return console.log("file location NOt Found!!");

    let uploadedFile = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("Your file has successfully uploaded : ", uploadedFile.url);

  

    return uploadedFile;
    
  } catch (error) {
    console.log("This is Cloudinary error :", error);

    fs.unlink(localFilePath, (error) => {
      if (error) console.log(error);
    });
  }
};

export default uploadFileInCloudinary;
