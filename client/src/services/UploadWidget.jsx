import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';

const UploadWidget = forwardRef(({ onImageUpload }, ref) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dsrohvpsm',
        uploadPreset: 'rr94kc3b',
        multiple: false,
        cropping: false,
        multipleUploads: false,
      },
      function (error, result) {
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the image info: ', result.info);
          const url = result.info.secure_url;
          onImageUpload(url);
        }
      }
    );
  }, [onImageUpload]);

  useImperativeHandle(ref, () => ({
    open() {
      widgetRef.current.open();
    },
  }));

  return (
    <button
      className="hidden pt-4 pb-3"
      type="button"
      onMouseDown={() => widgetRef.current.open()}
    >
      Subir Imágen
    </button>
  );
});

export default UploadWidget;
