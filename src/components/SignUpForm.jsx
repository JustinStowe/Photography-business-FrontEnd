import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePhotoStore } from "../stores/usePhotoStore";

export function SignUpForm({ setUser }) {
  const navigate = useNavigate();
  const { userSignUp } = usePhotoStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { error, confirm, ...data } = formData;
      const user = await userSignUp(data);
      navigate("/home/user");
    } catch (error) {
      console.log("sign-up error:", error);
      setFormData({ ...formData, error: "Sign Up Failed" });
    }
  };

  const disable = formData.password !== formData.confirm;

  return (
    <div>
      <div>
        <form
          className="flex justify-center align-middle flex-col w-1/4 mx-auto"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label>Name:</label>
          <input
            className="border-black border-2 rounded-md"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Email:</label>
          <input
            className="border-black border-2 rounded-md"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Password:</label>
          <input
            className="border-black border-2 rounded-md"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label>Confirm Password:</label>
          <input
            className="border-black border-2 rounded-md"
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
            required
          />
          <button
            className="border-green-600 bg-green-900 justify-center mx-auto m-4"
            type="submit"
            disabled={disable}
          >
            SIGN UP
          </button>
        </form>
      </div>
      <p>&nbsp; {formData.error}</p>
    </div>
  );
}
