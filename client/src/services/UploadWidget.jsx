// UploadWidget.js
import React, { useEffect, useRef } from "react";

const UploadWidget = ({ onImageUpload }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dsrohvpsm",
        uploadPreset: "rr94kc3b",
        // sources: ["local", "url"],
        multiple: false,
        cropping: false,
        multipleUploads: false,
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          const url = result.info.secure_url;
          onImageUpload(url); // Llama a la función para actualizar el estado con la URL de la imagen
        }
      }
    );
  }, []);

  return (
    <button
      className="bg-transparent font-medium border border-white text-white hover:bg-yellow-500  hover:text-black"
      type="button"
      onClick={() => widgetRef.current.open()}
    >
      Upload
    </button>
  );
};

export default UploadWidget;
