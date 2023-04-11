import React, { useEffect } from "react";
import Photo from "../components/photo";
export function HomePage({ user }) {
  const { photos, getAllPhotos } = useController();

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
