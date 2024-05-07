import { UploadDropzone } from "@/utils/uploadthing";
import React from "react";

const Dropzone = ({
  content,
  setFormData,
}: {
  content: string;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}) => {
  const handleImageUpload = (imageUrl: string) => {
    setFormData((prevData) => ({
      ...prevData,
      imageUrl,
    }));
  };
  return (
    <div className="space-y-4 text-white w-[48%]">
      <h1>{content}</h1>
      <div className="flex flex-col justify-center items-center border-[1px] border-primary border-dotted p-3 space-y-3 rounded-lg">
        <UploadDropzone
          appearance={{
            button: {
              background: "transparent",
              color: "#E25319",
            },
            uploadIcon: {
              color: "#E25319",
            },
            label: { color: "#E25319" },
            container: {
              display: "flex",
            },
          }}
          endpoint="pdfUploader"
          onClientUploadComplete={(res) => {
            console.log("Files: ", res);
            handleImageUpload(res[0].url);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>
    </div>
  );
};
export default Dropzone;
