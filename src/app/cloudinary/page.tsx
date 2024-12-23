"use client";
import { CldUploadButton } from 'next-cloudinary';
export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-center text-gray-700 mb-4">Upload Your File</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Click the button below to upload your file to Cloudinary.
        </p>
        <CldUploadButton
          uploadPreset="demo56"
          className="w-full bg-red-500 text-white rounded-md font-semibold py-2 px-4 hover:bg-red-600 transition-colors"
        >
          Upload File
        </CldUploadButton>
      </div>
    </div>
  );
}
