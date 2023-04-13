import React, { useEffect, useState } from "react";
import Photo from "../components/photo";
import { usePhotoStore } from "../stores/usePhotoStore";
export function HomePage({ user }) {
  const { photos, getAllPhotos } = usePhotoStore();

  useEffect(() => {
    console.log("user data @ homepage:", user);
    getAllPhotos(user);
  }, []);

  return (
    <div>
      <section>
        {/* {photos?.map((photo) => {
          return <Photo photo={photo} />;
        })} */}
      </section>
    </div>
  );
}
