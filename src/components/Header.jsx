import React from "react";
import { Link } from "react-router-dom";

export function Header({ user }) {
  return (
    <nav>
      {user && (
        <Link to="/home/new">
          <button>Upload new Photo</button>
        </Link>
      )}
      <Link to="/home">
        <button>Home</button>
      </Link>
      {user ? (
        <Link to="/logout">
          <button>Logout</button>
        </Link>
      ) : (
        <Link to="/Login">
          <button>Login</button>
        </Link>
      )}
    </nav>
  );
}
