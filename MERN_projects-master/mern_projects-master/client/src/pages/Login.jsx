import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "../css/home.css";


const Login = () => {
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();


  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value, //for dyname
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // error yete jr he add nahi kela tr
    try {
      const response = await fetch(`http://localhost:4000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      // console.log(response);

      const res_data = await response.json();

      if (response.ok) {
        toast("login successful");

        console.log("response from server", res_data);
        //stored the token in localhost
        storeTokenInLS(res_data.token); //using context api


        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        toast("invalid credentials")

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container ">
      <div className="container mt-3 py-5 d-flex justify-content-evenly align-content-center flex-wrap">
        <div className="login-container">
          <div className="section-registration">
            <div className="registration-form d-flex justify-content-justify-content-evenly flex-column">
              <h1 style={{ color: "#1e90ff" }}>Login Now</h1>
              <h1 style={{ color: "black" }}>To Our MERN PROJECT</h1>

              <form
                className="d-flex flex-column flex-wrap mt-5 p-3"
                onSubmit={handleSubmit}
              >
                <input
                  className="border-0 border-bottom m-1 p-2"
                  type="text"
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  placeholder="email"
                  value={user.email}
                  onChange={handleInput}
                />

                <input
                  className="border-0 border-bottom m-1 p-2"
                  type="text"
                  name="password"
                  id="password"
                  required
                  autoComplete="off"
                  placeholder="password"
                  value={user.password}
                  onChange={handleInput}
                />

                <button
                  className="btn text-bg-primary bg-primary mt-5"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="login-img"></div>
      </div>
    </div>
  );
};

export default Login;
