import React from "react";
import { Link } from "react-router-dom";
export function UserHeader() {
  return (
    <div className="p-4 bg-gray-900">
      <nav className="space-x-4 flex justify-between">
        <Link to="/home/user/new">
          <button>Upload new Photo</button>
        </Link>
        <Link to="/home/user">
          <button>Home</button>
        </Link>

        <Link to="/account">
          <button>Account</button>
        </Link>
      </nav>
    </div>
  );
}
