import { CloudinaryImage } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import React from "react";
import { cloud_name } from "../utilities/cloudinary";
import { Link } from "react-router-dom";
import { AdvancedImage } from "@cloudinary/react";

export default function Photo({ photo }) {
  const image = new CloudinaryImage(`${photo.title}`, {
    cloudName: { cloud_name },
  }).resize(fill().width(100).height(100));
  return (
    <Link to={`/photo/${photo.id}`}>
      <AdvancedImage cldImg={image} />
    </Link>
  );
}
