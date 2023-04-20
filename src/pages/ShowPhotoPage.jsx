import React, { useState, useEffect } from "react";
import { usePhotoStore } from "../stores/usePhotoStore";
import { useNavigate, useParams } from "react-router-dom";
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

export function ShowPhotoPage() {
  const { id } = useParams();
  const { updatePhoto, getOnePhoto, deletePhoto } = usePhotoStore();
  const [image, setImage] = useState();
  const [formData, setFormData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // fetch photo data by id and set initial form values
    const fetchPhoto = async () => {
      const photoData = await getOnePhoto(id);
      console.log("photoData @ showPage:", photoData);
      const foundImage = new CloudinaryImage(photoData.public_id, {
        cloudName: "dgs9byfnn",
      }).resize(fill().width(450).height(450));
      setImage(foundImage);
      setFormData({
        title: photoData.title || "",
        date: photoData.date || "",
      });
    };

    fetchPhoto();
  }, [id]);

  const handleTitleChange = (value) => {
    setFormData((prevData) => ({ ...prevData, title: value }));
  };

  const handleDateChange = (value) => {
    setFormData((prevData) => ({ ...prevData, date: value }));
  };

  const handleDelete = async (evt) => {
    evt.preventDefault();
    try {
      await deletePhoto(id);
      navigate("/home/user");
    } catch (error) {}
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await updatePhoto(id, {
        title: formData.title,
        date: formData.date,
      });
      navigate("/home");
    } catch (error) {
      console.error(error);
      setFormData({ ...formData, error: "Photo update failed!" });
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <AdvancedImage
            className="mx-auto my-7"
            cldImg={image}
            alt={`Uploaded image`}
          />
          <label>Title:</label>
          <input
            className="my-4  mx-2"
            type="text"
            name="title"
            value={formData.title}
            onChange={(evt) => handleTitleChange(evt.target.value)}
            required
          />
          <label>Date:</label>
          <input
            className="my-4 mx-2"
            type="text"
            name="date"
            value={formData.date}
            onChange={(evt) => handleDateChange(evt.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}
