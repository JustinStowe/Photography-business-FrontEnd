import React, { useEffect, useState } from "react";
import { useController } from "../hooks/useHook";

export function NewPhotoPage({ user }) {
  const { createNewPhoto } = useController();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    image: "",
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
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { error, confirm, ...data } = formData;
      const photo = await createNewPhoto(data);
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
        <label>image:</label>
        <h2>upload image placeholder</h2>
      </form>
    </div>
  );
}
