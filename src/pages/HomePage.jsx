import React, { useState, useEffect } from "react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { usePhotoStore } from "../stores/usePhotoStore";
import { Link } from "react-router-dom";

export function HomePage() {
  const { photos, getAllPhotos, user } = usePhotoStore();
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log("user data @ homepage:", user);
  console.log("localPhotos @ homepage:", photos);
  useEffect(() => {
    async function getUserPhotos() {
      try {
        await getAllPhotos();
        const photoList = photos.map((photo) => {
          const image = new CloudinaryImage(photo.public_id, {
            cloudName: "dgs9byfnn",
          }).resize(fill().width(400).height(400));
          return (
            <div className="bg-black p-2 rounded-lg" key={photo._id}>
              <Link to={`/home/show/${photo._id}`}>
                <AdvancedImage cldImg={image} />
              </Link>
              <div>Title: {photo.title}</div>
              <div>Title: {photo.date}</div>
            </div>
          );
        });
        setImages(photoList);
        setIsLoading(false);
        console.log("useEffect ran");
      } catch (error) {
        console.error("Error fetching user photos:", error);
      }
    }
    getUserPhotos();
  }, []);

  return (
    <div>
      <h1>Your Photo Collection</h1>

      {user.photos < 1 ? (
        <h1>YOU DON'T HAVE ANY PHOTOS YET</h1>
      ) : (
        <section className="flex flex-wrap grid-flow-row gap-2 justify-center">
          {images}
        </section>
      )}
    </div>
  );
}
