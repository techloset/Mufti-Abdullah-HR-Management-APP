import React from "react";

import { UploadDropzone } from "@/utils/uploadthing";
import { FormData } from "@/app/constants/Types";

const Employeedocument = ({
  setFormData,
  formData,
}: {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}) => {
  const handlePdfUpload = (fieldName: keyof FormData) => (pdfUrl: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: pdfUrl,
    }));
  };
  return (
    <div className="flex flex-wrap pt-[30px] gap-4 w-full mx-auto">
      <div className="space-y-4 text-white w-[48%]">
        <h1>Upload Appointment Letter</h1>
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
              handlePdfUpload("appointmentLetter")(res[0].url);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
      </div>
      <div className="space-y-4 text-white w-[48%]">
        <h1>Upload Salary Slips</h1>
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
              handlePdfUpload("salarySlips")(res[0].url);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
      </div>
      <div className="space-y-4 text-white w-[48%]">
        <h1>Upload Reliving Letter</h1>
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
              handlePdfUpload("relivingLetter")(res[0].url);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
      </div>
      <div className="space-y-4 text-white w-[48%]">
        <h1>Upload Experience Letter</h1>
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
              handlePdfUpload("experienceLetter")(res[0].url);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Employeedocument;
