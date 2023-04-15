import React, { useState, useEffect } from "react";
import { usePhotoStore } from "../stores/usePhotoStore";
import { useNavigate } from "react-router-dom";

export function NewPhotoPage({ user }) {
  // console.log("user data @ newPhoto Page:", user);
  const { createNewPhoto } = usePhotoStore();
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cloudinaryWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dgs9byfnn",
        uploadPreset: "tajdjzcq",
        sources: ["local", "url"],
        folder: "user_images",
        clientAllowedFormats: ["images", "jpg", "png"],
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          setImages((prevImages) => [...prevImages, result.info.secure_url]);
          setFormData((prevData) => [...prevData, { title: "", date: "" }]);
        }
      }
    );

    cloudinaryWidget.open();
  }, []);

  const handleTitleChange = (index, value) => {
    const newData = [...formData];
    newData[index].title = value;
    setFormData(newData);
  };

  const handleDateChange = (index, value) => {
    const newData = [...formData];
    newData[index].date = value;
    setFormData(newData);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const newPhotoData = images.map((imageUrl, index) => ({
        title: formData[index].title,
        date: formData[index].date,
        image: imageUrl,
      }));

      await createNewPhoto(newPhotoData);
      console.log("array of photos data @ newPhotoPage:", newPhotoData);
      navigate("/home");
    } catch (error) {
      console.error(error);
      setFormData({ ...formData, error: "Photo creation failed!" });
    }
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          {images.map((imageUrl, index) => (
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
                value={formData[index]?.title}
                onChange={(evt) => handleTitleChange(index, evt.target.value)}
                required
              />
              <label>Date:</label>
              <input
                type="text"
                name={`date-${index}`}
                value={formData[index]?.date}
                onChange={(evt) => handleDateChange(index, evt.target.value)}
              />
            </div>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
