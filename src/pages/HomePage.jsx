import React, { useEffect } from "react";
import Photo from "../components/photo";
import { usePhotoStore } from "../stores/usePhotoStore";
export function HomePage({ user }) {
  const { photos, getAllPhotos } = usePhotoStore();

  useEffect(() => {
    getAllPhotos();
  }, []);

  return (
    <div>
      <section>
        {photos.map((photo) => {
          return <Photo photo={photo} />;
        })}
      </section>
    </div>
  );
}
