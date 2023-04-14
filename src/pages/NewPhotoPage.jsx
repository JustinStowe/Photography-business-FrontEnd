import React, { useState } from "react";
import { usePhotoStore } from "../stores/usePhotoStore";
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";

export function NewPhotoPage({ user }) {
  console.log("user data @ newPhoto Page:", user);
  const { createNewPhoto } = usePhotoStore();
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    image: "",
    owner: user._id,
  });

  const handleImageUpload = (imageUrl, index) => {
    setFiles([...files.slice(0, index), imageUrl, ...files.slice(index + 1)]);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { error, confirm, ...data } = formData;

      console.log("data @ newPhotoPage", data);
      await createNewPhoto({ ...data, image: files });
    } catch (error) {
      console.error(error);
      setFormData({ ...formData, error: "Photo creation failed!" });
    }
  };
  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    if (name.startsWith("title-")) {
      const titleIndex = name.split("-")[1];
      setFormData((formData) => ({
        ...formData,
        [`title-${titleIndex}`]: value,
        error: "",
      }));
    } else if (name.startsWith("date-")) {
      const dateIndex = name.split("-")[1];
      setFormData((formData) => ({
        ...formData,
        [`date-${dateIndex}`]: value,
        error: "",
      }));
    }
  };

  return (
    <div>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <CloudinaryUploadWidget onImageUpload={handleImageUpload} />
        <div>
          {files.map((imageUrl, index) => (
            <div className="flex flex-row">
              <img
                key={index}
                src={imageUrl}
                alt={`Uploaded image ${index}`}
                style={{ maxHeight: 200, maxWidth: "auto" }}
              />
              <label>Title:</label>
              <input
                type="text"
                name={`title-${index}`}
                value={formData[`title-${index}`]}
                onChange={handleChange}
                required
              />
              <label>Date:</label>
              <input
                type="text"
                name={`date-${index}`}
                value={formData[`date-${index}`]}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
