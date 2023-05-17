import React, { useState, useEffect } from "react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { usePhotoStore } from "../stores/usePhotoStore";
import { Link } from "react-router-dom";
import { getAllUsers, getAllPhotos } from "../utilities/admin-service";

export function AdminPage() {
  const { photos, getAllPhotos, user } = usePhotoStore();
  const { users, setUsers } = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  console.log("user data @ admin page", user);
  console.log("localPhotos @ admin page", photos);

  useEffect(() => {
    async function getUsers() {
      try {
        userAccounts = await getAllUsers();
        setUsers(userAccounts);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    async function getPhotos() {
      try {
        await getUsers();
        const userPhotos = await getAllPhotos();
        const photoList = userPhotos.map((photo) => {
          const image = new CloudinaryImage(photo.public.id, {
            cloudName: "dgs9byfnn",
          }).resize(fill().width(100).height(100));
          return (
            <div className="bg-black p-2 rounded-lg" key={photo._id}>
              <Link to={`/admin/photos/${photo._id}`}>
                <AdvancedImage cldImg={image} />
              </Link>
              <div>Title: {photo.title} </div>
              <div>Date: {photo.date} </div>
            </div>
          );
        });
        setImages(photoList);
        setIsLoading(false);
        console.log("useEffect ran");
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }
    getAllPhotos();
  }, []);
  return (
    <div>
      <h1>Admin Page</h1>

      <section>
        {isLoading ? (
          <div> Loading users... </div>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                <div> Name: {user.name} </div>
                <div> Email: {user.email} </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Photo Collection</h2>
        {isLoading ? (
          <div>Loading photos...</div>
        ) : (
          <section className="flex flex-wrap grid-flow-row gap-2 justify-center">
            {images}
          </section>
        )}
      </section>
    </div>
  );
}
