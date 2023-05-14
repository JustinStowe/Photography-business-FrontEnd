import React, { useState } from "react";
import { Link } from "react-router-dom";
import { usePhotoStore } from "../stores/usePhotoStore";

export function Header() {
  const { user } = usePhotoStore();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-4  bg-black w-full ">
      <nav className="space-x-4 flex justify-around">
        {user && (
          <Link to="/home/user/new">
            <button>Upload new Photo</button>
          </Link>
        )}
        {user ? (
          <Link to="/home/user">
            <button>Home</button>
          </Link>
        ) : (
          <Link to="/home/public">
            <button>Home</button>
          </Link>
        )}

        <Link to="/account">
          <button>Account</button>
        </Link>

        <Link
          to="https://calendly.com/justinstowe12/consultation-meeting"
          target="blank"
        >
          <button>schedule a meeting</button>
        </Link>
        <Link to="/contact">
          <button>Contact Me</button>
        </Link>
      </nav>
    </div>
  );
}
