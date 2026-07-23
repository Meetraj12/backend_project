import {v2 as cloudinary} from "cloudinary"
import { log } from "console";
import fs, { unlinkSync } from "fs"

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_SECRET_KEY
});

const uploadOnCloudinary = async (localfilepath) => {
    try{
        if(!localfilepath) return null;
        const response = await cloudinary.uploader.upload(localfilepath,{
            resource_type: "auto"
        })
        console.log("File uploaded successfully on cloudinary", response.url);
        return response;
    }
    catch(err)
    {
        fs.unlinkSync(localfilepath);
        return null;
    }
}

cloudinary.uploader
  .upload("my_image.jpg")
  .then(result=>console.log(result));