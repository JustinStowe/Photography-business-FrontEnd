import { useState } from "react";
import * as userService from "../utilities/user-service";
import { useNavigate } from "react-router-dom";

export function LoginForm({ setUser }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await userService.login(credentials);
      setUser(user);
      navigate("/home");
    } catch (error) {
      console.log("login error", error);
      setError("Log in Failed, Please Try Again");
    }
  }
  return (
    <div>
      <div>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password" // Change input type to "password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p>&nbsp;{error}</p>
    </div>
  );
}
