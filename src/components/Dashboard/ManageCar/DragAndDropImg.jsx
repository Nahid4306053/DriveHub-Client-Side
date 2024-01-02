/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function DragAndDropImg({
  acceptedFiles,
  getRootProps,
  fileRejections,
  getInputProps,
}) {
  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {errors[0].message}
    </li>
  ));

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      <img className="h-24" src={URL.createObjectURL(file)} alt="" />
    </li>
  ));

  return (
    <section className="container">
      <div
        className="border-green-700 border-2 px-0"
        {...getRootProps({ className: "dropzone" })}
      >
        <input {...getInputProps()} />
        <p className="border-dotted border-4  border-red-900 rounded-lg py-10 text-center px-5">
          Drag 'n' drop Car Gallery Images, or click to select [minimam 3 and
          maximam 5 img]
        </p>
      </div>
      <aside>
        <h4 className="mt-5">Gallery Images</h4>
        <ul className="flex flex-wrap gap-5 my-4">{files}</ul>
      </aside>
      {fileRejectionItems.length > 0 && (
        <div>
          <p>Rejected Files:</p>
          <ul className="text-red-500">{fileRejectionItems}</ul>
        </div>
      )}
    </section>
  );
}
