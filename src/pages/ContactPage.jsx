import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(name, email, message);
  };

  const sendEmail = (name, email, message) => {
    emailjs
      .send(
        "service_yq45tvo",
        "template_whu32ad",
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        "user_Vh-UnyrSNHmS8syZ3"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED....", error);
        }
      );
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <label htmlFor="message" className="block mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
}
