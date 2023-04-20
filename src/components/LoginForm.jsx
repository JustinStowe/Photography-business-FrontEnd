import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePhotoStore } from "../stores/usePhotoStore";

export function LoginForm() {
  const navigate = useNavigate();
  const { userLogin } = usePhotoStore();
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
      await userLogin(credentials);
      navigate("/home/user");
    } catch (error) {
      console.log("login error", error);
      setError("Log in Failed, Please Try Again");
    }
  }
  return (
    <div>
      <div>
        <form
          className="flex justify-center align-middle flex-col w-1/4 mx-auto"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label>Email:</label>
          <input
            className=""
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
          <button
            className="border-green-600 bg-green-900 justify-center mx-auto m-4"
            type="submit"
          >
            LOG IN
          </button>
        </form>
      </div>
      <p>&nbsp;{error}</p>
    </div>
  );
}
