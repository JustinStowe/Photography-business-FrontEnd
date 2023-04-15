import React, { useState, useEffect } from "react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { usePhotoStore } from "../stores/usePhotoStore";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export function HomePage({ user }) {
  const { photos, getAllPhotos } = usePhotoStore();
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    async function getDefaultPhotos() {
      try {
        const res = await axios.get(
          "http://res.cloudinary.com/dgs9byfnn/image/list/portfolio.json"
        );
        const { resources } = res.data;
        const photoList = resources.map((resource) => {
          const image = new CloudinaryImage(resource.public_id, {
            cloudName: "dgs9byfnn",
          }).resize(fill().width(400).height(400));
          return <AdvancedImage key={resource.public_id} cldImg={image} />;
        });
        setImages(photoList);
      } catch (error) {
        console.error("Error fetching default photos:", error);
      } finally {
        setIsLoading(false);
      }
    }

    async function getUserPhotos() {
      try {
        await getAllPhotos();
        const photoList = photos.map((photo) => {
          const image = new CloudinaryImage(photo.public_id, {
            cloudName: "dgs9byfnn",
          }).resize(fill().width(400).height(400));
          return (
            <Link to={`/home/show/${photo._id}`} key={photo._id}>
              <AdvancedImage cldImg={image} />
            </Link>
          );
        });
        setImages(photoList);
      } catch (error) {
        console.error("Error fetching user photos:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (user) {
      getUserPhotos();
    } else {
      getDefaultPhotos();
    }
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (images.length < 1) {
    return (
      <div>
        <h1>YOU DON'T HAVE ANY IMAGES YET.</h1>
      </div>
    );
  }

  return (
    <div>
      {user ? (
        <h1>{user.name}'s PhotoCollection</h1>
      ) : (
        <h1>A sample of my photography portfolio</h1>
      )}
      <section>{images}</section>
    </div>
  );
}
