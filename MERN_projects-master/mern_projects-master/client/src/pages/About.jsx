import React from "react";
import { useAuth } from "../store/auth";

const About = () => {
  const { user, isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return (
    <div className="container mt-4 d-flex justify-content-evenly align-content-center flex-wrap " >
      <div className=" home-page" style={{width:"50rem"}}>
      <br />
      <h1>Welcome {isLoggedIn && user ? user.username : "guest"}</h1>
      <br />
      <br />
      <h4>MERN PROJECT Overview:</h4>

      <p>
        The MERN PROJECT is a full-stack web application built using MongoDB,
        Express.js, React, and Node.js. It encompasses multiple pages including
        the Home, Contact, Services, Login, and Register pages, offering a
        comprehensive user experience.
      </p>

      <h4>Key Features:</h4>
      <ol>
        <li>
          <b>Contact Page:</b> The Contact page features a dynamic form that
          auto-fills user details like username and email when logged in,
          streamlining the communication process.
        </li>
        <li>
          <b>Services Page:</b> Services are fetched from a MongoDB collection
          and displayed as interactive cards, enhancing the presentation of
          offerings.
        </li>
        <li>
          <b>Authentication:</b> Users can securely register and log in. The
          navbar dynamically updates to display logout when logged in and
          register/login options otherwise.
        </li>
        <li>
          <b> Admin Panel:</b> Accessible only to authorized admin users, the
          admin panel allows for CRUD (Create, Read, Update, Delete) operations,
          providing robust management capabilities.
        </li>
      </ol>

      <h4>Technical Stack:</h4>
      <ol>
        <li>
          <b>Frontend:</b> HTML, CSS, JavaScript, React{" "}
        </li>
        <li>
          <b>Backend:</b> Node.js, Express.js
        </li>
        <li>
          <b>Database:</b> MongoDB
        </li>
      </ol>

      <h4>Security Measures:</h4>

      <ol>
        <li> Admin panel access is restricted to authorized admin users only, ensuring data integrity and system security.</li>
      </ol>

      <p>The MERN PROJECT showcases the power of the MERN stack in creating a dynamic and secure web application with a user-friendly interface and robust functionality.</p>
      </div>
      <div className=" home-img"></div>
    </div>
  );
};

export default About;
