import React, { useState } from "react";
import { SignUpForm, LoginForm, AccountDetails } from "../components";
import { useNavigate } from "react-router-dom";
import { usePhotoStore } from "../stores/usePhotoStore";

export function AccountPage() {
  const [showLogin, setShowLogin] = useState(true);
  const { userLogout, user } = usePhotoStore();
  const navigate = useNavigate();

  const handleLogout = (evt) => {
    evt.preventDefault();
    try {
      userLogout();
      navigate("/home/public");
    } catch (error) {
      console.error("logOut error:", error);
    }
  };
  return (
    <main>
      <div className="m-12">
        {user ? (
          <div>
            <button className="" onClick={handleLogout}>
              Log Out
            </button>
            <AccountDetails />
          </div>
        ) : (
          <div className="m-8">
            {showLogin ? <LoginForm /> : <SignUpForm />}
            <button className="" onClick={() => setShowLogin(!showLogin)}>
              {showLogin ? "CLICK HERE TO SIGN UP" : "CLICK HERE TO LOG IN"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
