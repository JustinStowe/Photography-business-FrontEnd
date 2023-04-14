import React, { useState } from "react";
import { SignUpForm, LoginForm } from "../components";
import { logOut } from "../utilities/user-service";

export function AccountPage({ user, setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <div>
        {user ? (
          <button onClick={logOut}>Log Out</button>
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
