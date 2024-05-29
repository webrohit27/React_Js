import React, { useState } from "react";
import { useAuth } from "../store/auth";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);
  const { user, isLoggedIn } = useAuth();
  const [userData, setUserData] = useState(true);



  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: " ",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value, //for dyname
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container p-5 d-flex justify-content-evenly align-content-center flex-wrap"  style={{width:"70rem"}}>
        <div className="contact-container " style={{width:"25rem"}}>
          <h3 className="mb-4">Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column" >
              <input
              className="border-0 border-bottom mt-3 px-3 py-1"
                type="text"
                placeholder="username"
                required
                name="username"
                id="username"
                value={isLoggedIn && user ? contact.username : null}
                
                onChange={handleInput}
              />
              <input
              className="border-0 border-bottom mt-3 px-3 py-1"
                type="email"
                placeholder="email"
                required
                name="email"
                id="email"
                value={isLoggedIn && user ? contact.email : null}
                onChange={handleInput}
              />
              <textarea
              className="border-0 border-bottom mt-3 px-3 py-1"
                name="message"
                placeholder="message"
                id="message"
                required
                autoComplete="off"
                rows="5"
                cols="30"
                value={contact.message}
                onChange={handleInput}
              ></textarea>
            </div>
            <button className="btn text-bg-primary bg-primary mt-3">
              submit
            </button>
          </form>
        </div>
        <div className="contact-img "></div>
      </div>
    </>
  );
};

export default Contact;
