import React, { useState } from "react";
import { SignUpForm, LoginForm } from "../components";

export function AccountPage({ user, setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <div>
        {/* logo */}
        <h3 onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "SIGN UP" : "LOG IN"}
        </h3>
      </div>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
