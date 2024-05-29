import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const navigate = useNavigate();
  const { authorizationToken } = useAuth();

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log("signle data *", data);

      setData(data);

      // if (response.ok) {
      //   getAllUsersData();
      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  // to update the data dynamically
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("updated successfully");
        navigate("/admin/adminUsers");
      } else {
        toast.success("not updated successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="editi-conatiner container" style={{ width: "50%" }}>
        <form className="d-flex justify-content-center flex-column" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              User Name
            </label>
            <input
              type="text"
              class="form-control"
              required
              autoComplete="off"
              value={data.username}
              onChange={handleInput}
              name="username"
              id="username"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="text"
              required
              autoComplete="off"
              value={data.email}
              onChange={handleInput}
              name="phone"
              id="phone"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
            Phone number
            </label>
            <input
              type="text"
              required
              autoComplete="off"
              value={data.phone}
              onChange={handleInput}
              name="email"
              id="email"
              class="form-control"
            />
          </div>

          <button className="btn btn-success px-5">update</button>
        </form>
      </div>
    </>
  );
};

export default AdminUpdate;
