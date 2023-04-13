import React, { useState } from "react";
import { usePhotoStore } from "../stores/usePhotoStore";

export function NewPhotoPage({ user }) {
  const { createNewPhoto } = usePhotoStore();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    file: null,
    contentType: "",
    owner: "",
  });
  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };
  // const handleFileChange = (evt) => {
  //   console.log("image file for upload", evt.target.files[0]);
  //   setFormData({ ...formData, file: evt.target.files[0] });
  // };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { error, confirm, ...data } = formData;

      const formDataObj = new FormData();
      formDataObj.append("title", data.title);
      formDataObj.append("date", data.date);
      formDataObj.append("image", data.file);

      const photo = await createNewPhoto(formDataObj);
    } catch (error) {
      console.error(error);
      setFormData({ ...formData, error: "Photo creation failed!" });
    }
  };
  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label>date:</label>
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <label>
          image:
          <input
            type="file"
            name="image"
            accept="image/*"
            value={formData.file}
            onChange={handleChange}
          />
        </label>
        <h2>upload image placeholder</h2>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
