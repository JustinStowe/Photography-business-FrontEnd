import React from "react";
import { Link } from "react-router-dom";

export function Header({ user }) {
  return (
    <div className="p-4 bg-gray-900">
      <nav className="space-x-4 flex justify-between">
        {user && (
          <Link to="/home/new">
            <button>Upload new Photo</button>
          </Link>
        )}
        <Link to="/home">
          <button>Home</button>
        </Link>

        <Link to="/account">
          <button>Account</button>
        </Link>
      </nav>
    </div>
  );
}
