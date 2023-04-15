import React, { useState } from "react";
import { SignUpForm, LoginForm } from "../components";
import { logOut } from "../utilities/user-service";
import { useNavigate } from "react-router-dom";

export function AccountPage({ user, setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();
  const handleLogout = (evt) => {
    evt.preventDefault();
    try {
      logOut();
      setUser({});
      navigate("/home");
    } catch (error) {
      console.error("logOut error:", error);
    }
  };
  return (
    <main>
      <div>
        {user ? (
          <button onClick={handleLogout}>Log Out</button>
        ) : (
          <>
            <h3 onClick={() => setShowLogin(!showLogin)}>
              {showLogin ? "CLICK HERE TO SIGN UP" : "CLICK HERE TO LOG IN"}
            </h3>
            {showLogin ? (
              <LoginForm setUser={setUser} />
            ) : (
              <SignUpForm setUser={setUser} />
            )}
          </>
        )}
      </div>
    </main>
  );
}
