import React, { useState } from "react";
import { usePhotoStore } from "../stores/usePhotoStore";
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";
import { useNavigate } from "react-router-dom";

export function NewPhotoPage({ user }) {
  console.log("user data @ newPhoto Page:", user);
  const { createNewPhoto } = usePhotoStore();
  const [images, setImages] = useState(new Set());
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    images: "",
  });

  const handleImageUpload = (imageUrl) => {
    setImages((prevImages) => new Set([...prevImages, imageUrl]));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { error, confirm, ...data } = formData;

      console.log("data @ newPhotoPage", data);
      await createNewPhoto({ ...data, image: [...images] });
      useNavigate("/home");
    } catch (error) {
      console.error(error);
      setFormData({ ...formData, error: "Photo creation failed!" });
    }
  };

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      error: "",
    }));
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <CloudinaryUploadWidget onImageUpload={handleImageUpload} />
        <div>
          {[...images].map((imageUrl, index) => (
            <div className="flex flex-row" key={imageUrl}>
              <img
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
