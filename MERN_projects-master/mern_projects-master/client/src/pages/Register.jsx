import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
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
    e.preventDefault();
    // toast(user);

    try {
      //this part is from postman headers, body, 'Content-Type':'application/json', and url is same url
      const response = await fetch(`http://localhost:4000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      // console.log("response from server", res_data.message);
      // console.log("response from server", res_data.extraDetails);

      if (response.ok) {
        //stored the token in localhost
        storeTokenInLS(res_data.token); //using context api
        // localStorage.setItem("token", res_data.token)
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/");
      } else {
        // toast("not valid  user information");
        toast(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div  className="container ">
      <section>
        <main>
          <div className="row section-registration mt-3 py-5 d-flex justify-content-evenly align-content-center flex-wrap">
            <div className="col-6 registration-form d-flex justify-content-justify-content-evenly flex-column ">
              <h1 style={{ color: "#1e90ff" }}>Register Now</h1>
              <form className="d-flex flex-column flex-wrap mt-5 p-3"  onSubmit={handleSubmit}>
                <input className="border-0 border-bottom m-1 p-2"
                  type="text"
                  name="username"
                  id="username"
                  required
                  autoComplete="off"
                  placeholder="username"
                  value={user.username}
                  onChange={handleInput}
                />
                <input className="border-0 border-bottom m-1 p-2"
                  type="text"
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  placeholder="email"
                  value={user.email}
                  onChange={handleInput}
                />
                <input className="border-0 border-bottom m-1 p-2"
                  type="text"
                  name="phone"
                  id="phone"
                  required
                  autoComplete="off"
                  placeholder="phone"
                  value={user.phone}
                  onChange={handleInput}
                />
                <input className="border-0 border-bottom m-1 p-2"
                  type="text"
                  name="password"
                  id="password"
                  required
                  autoComplete="off"
                  placeholder="password"
                  value={user.password}
                  onChange={handleInput}
                />

                <button className="btn text-bg-primary bg-primary mt-5"  type="submit">Submit</button>
              </form>
            </div>

            <div className="col-6 m-x4 login-img" ></div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Register;
