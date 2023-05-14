import React, { useState } from "react";
import emailjs from "emailjs/browser";
export function contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(name, email, message);
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
}
