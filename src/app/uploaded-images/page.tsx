"use client";
// import { useEffect, useState } from "react";
import axios from "axios";
// import Image from "next/image";
export default function Page() {
  // const [images, setImages] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const cloudinaryApi = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
  const cloudinarySecret = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET;
  console.log("secret",cloudinarySecret)
  const cloudinaryId = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  const getCloudinaryImages = async () => {
    // setLoading(true);
    // setError(null);
    try {
      const response = await axios.get(
        `https://${cloudinaryApi}:${cloudinarySecret}@api.cloudinary.com/v1_1/${cloudinaryId}/resources/image`
      );
      console.log("response",response.data)
      // if (response.data.success) {
      //   // setImages(response.data);
      // }
    }
     catch(error) {
      // setError(error.message);
      console.log("error",error)
    } 
    // finally {
    //   // setLoading(false);
    // }
  };
  getCloudinaryImages()

  // useEffect(() => {
  //   getCloudinaryImages();
  // },[images]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">
        Cloudinary Image Gallery
      </h1>
{/* 
      <div className="flex justify-center mb-4">
        <button
          onClick={getCloudinaryImages}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md"
        >
          {loading ? "Loading..." : "Refresh Images"}
        </button>
      </div> */}

      {/* {error && <p className="text-red-500 text-center">Error: {error}</p>}

      {images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image: any) => (
            <div
              key={image.public_id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image 
                src={image.secure_url}
                alt={image.public_id}
                className="w-full h-48 object-cover"
              />
              <div className="p-2">
                <p className="text-sm truncate">{image.public_id}</p>
              </div>
            </div>
          ))}
        </div>
      ) : ( */}
        <p className="text-center text-gray-500">No images found.</p>
      {/* )} */}
    </div>
  );
}
