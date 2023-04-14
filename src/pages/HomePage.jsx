import React, { useState, useEffect } from "react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { usePhotoStore } from "../stores/usePhotoStore";
import axios from "axios";
export function HomePage({ user }) {
  const { photos, getAllPhotos } = usePhotoStore();
  const [images, setImages] = useState([]);
  {
    user
      ? useEffect(() => {
          console.log("user data @ homepage:", user);
          getAllPhotos(user);
        }, [])
      : useEffect(() => {
          async function getDefaultPhotos() {
            axios
              .get(
                "http://res.cloudinary.com/dgs9byfnn/image/list/portfolio.json"
              )
              .then((res) => {
                console.log("default photos:", res.data.resources);
                const { resources } = res.data;
                const photoList = resources.map((resource) => {
                  const image = new CloudinaryImage(resource.public_id, {
                    cloudName: "dgs9byfnn",
                  }).resize(fill().width(400).height(400));
                  return (
                    <AdvancedImage key={resource.public_id} cldImg={image} />
                  );
                });
                setImages(photoList);
              });
          }
          getDefaultPhotos();
        }, []);
  }
  if (images < 1) {
    return (
      <div>
        <h1>YOU DON'T HAVE ANY IMAGES YET.</h1>
      </div>
    );
  }
  return (
    <div>
      <section>{images}</section>
    </div>
  );
}
