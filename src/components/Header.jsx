import React, { useState } from "react";
import { Link } from "react-router-dom";
import { usePhotoStore } from "../stores/usePhotoStore";

export function Header() {
  const { user } = usePhotoStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 bg-black w-full">
      <div className="flex justify-end">
        <button className="text-white md:hidden" onClick={toggleMenu}>
          Menu
        </button>
      </div>
      <nav
        className={`space-x-4 md:flex md:justify-end ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {user && (
          <Link to="/home/user/new">
            <button onClick={toggleMenu}>Upload new Photo</button>
          </Link>
        )}
        {user ? (
          <Link to="/home/user">
            <button onClick={toggleMenu}>Home</button>
          </Link>
        ) : (
          <Link to="/home/public">
            <button onClick={toggleMenu}>Home</button>
          </Link>
        )}

        <Link to="/account">
          <button onClick={toggleMenu}>Account</button>
        </Link>

        <Link
          to="https://calendly.com/justinstowe12/consultation-meeting"
          target="blank"
        >
          <button onClick={toggleMenu}>Schedule a meeting</button>
        </Link>
        <Link to="/contact">
          <button onClick={toggleMenu}>Contact Me</button>
        </Link>
      </nav>
    </div>
  );
}
